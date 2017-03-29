import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {HttpInterceptorService, RESTService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";
import {
  Product,
  Brand,
  Distributor,
  Tag,
  Tax,
  ItemsService,
  TagsService,
  TaxsService,
  DistributorService,
  BrandsService,
  SaltsService, StocksService, Stock
} from "./items.service";
import {IndexDBServiceService} from "./indexdb.service";
import {Address} from "./customer.service";
import {OrderItemsService} from "./orders.service";


export interface RetailShop {
  id: string;
  name: string;
  retail_brand_id?: string;
  products?: Product[];
  registration_details?: RegistrationDetail[];
  total_sales: {
    total_sales: number;
    total_orders: number;
    total_items: number;
  };
  retail_brand?: RetailBrand;
  address: Address;
  brands?: Brand[];
  distributors?: Distributor[];
  tags?: Tag[];
  taxes?: Tax[];
  _link?: {};
}

export interface RegistrationDetail {
  name: string;
  value: string;

}

export interface RetailBrand {
  name: string;
  id: string;
}

@Injectable()
export class RetailShopsService extends RESTService<RetailShop> {

  _shops: RetailShop[] = <RetailShop[]>[];
  _shop: RetailShop = <RetailShop>{};
  _shops$: Subject<RetailShop[]> = <Subject<RetailShop[]>> new Subject();
  _shop$: Subject<RetailShop> = <Subject<RetailShop>> new Subject();

  constructor(private _http: HttpInterceptorService,
              private _indexDB: IndexDBServiceService,
              private _itemService: ItemsService,
              private _tagService: TagsService,
              private _taxService: TaxsService,
              private _stockService: StocksService,
              private _orderItemService: OrderItemsService,
              private _distributorService: DistributorService,
              private _brandService: BrandsService,
              private _saltService: SaltsService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/retail_shop',
    });
  }

  set shop(data: RetailShop) {
    this._shop = data;
    this._shop$.next(this.shop);
  }

  set shops(data: RetailShop[]) {
    this._shops = data;
    this.shops.forEach((value) => {
      this._indexDB.shops.add(value).then(() => {
        },
        () => {
          this._indexDB.shops.update(value.id, value).then()
        })
    });

    this._shops$.next(this.shops);
  }

  get shop$(): Observable<RetailShop> {
    return this._shop$.asObservable();
  }

  get shops$(): Observable<RetailShop[]> {
    return this._shops$.asObservable();
  }

  get shop(): RetailShop {
    return this._shop
  }

  get shops(): RetailShop[] {
    return this._shops
  }

  async getUpdate(retailShopId: string): Promise<boolean> {
    return await this._indexDB.configs.get(retailShopId).then((data)=>{
      this.getProductUpdate(retailShopId, data.stock_time).then();
      this.getStockUpdate(data.stock_time, retailShopId).then();
      this.getOrderItemUpdate(retailShopId, data.stock_time).then();
      this.updateStockTime(retailShopId);
      return true
    });
  }

  async getProductUpdate(retailShopId: string, date?: string, optionalParams?: any): Promise<boolean> {
    let productParams = {__retail_shop_id__equal: retailShopId, __limit: 1000, __page: 1, __is_disabled__bool: false,
      __include: ['similar_products', 'available_stocks', 'brand', 'distributors'], __exclude: ['links']};

    if (date !== null) {
      productParams['__updated_on__date_gte'] = date;
    }
    if  (optionalParams) {
      Object.keys(optionalParams).forEach((k)=>{
        productParams[k] = optionalParams[k]
      });
    }
    return await this._itemService.saveProducts(productParams).then(()=>{
      return true
    });
  }

  async getStockUpdate(date: string, retailShopId: string, pageNumber?: number): Promise<boolean> {
    let stockParams = {__retail_shop_id__equal: retailShopId, __limit: 100, __page: pageNumber || 1,
      __only: ['id', 'product_id'],
      __updated_on__date_gte: date};
    return await this._stockService.query(stockParams).subscribe((data: {data: Stock[]})=>{

      let productId: string[] = data.data.map((value)=>{
          return value.product_id;
      });
      if (productId.length) {
        this.getProductUpdate(retailShopId, null, {__id__in: productId}).then();
      }
      if (stockParams['__limit']==data.data.length) {
        this.getStockUpdate(date, retailShopId, pageNumber+1 || 2).then();
        return true
      }
      return true
    }).closed
  }

  async getOrderItemUpdate(retailShopId: string, date?: string,  pageNumber?: number, optionalParams?: any): Promise<boolean> {
    let orderItemParams = {
      __retail_shop_id__equal: retailShopId, __limit: 100, __page: pageNumber || 1,
      __only: ['id', 'product_id']};

    if (date !== null) {
      orderItemParams['__updated_on__date_gte'] = date;
    }
    if  (optionalParams) {
      Object.keys(optionalParams).forEach((k)=>{
        orderItemParams[k] = optionalParams[k]
      });
    }
    return await this._orderItemService.query(orderItemParams).subscribe((data) => {
      let productId: string[] = data.data.map((value) => {
        return value.product_id;
      });
      if (productId.length) {
        this.getProductUpdate(retailShopId, null, {__id__in: productId}).then();
      }
      if (orderItemParams['__limit']==data.data.length) {
        this.getOrderItemUpdate(date, retailShopId, pageNumber+1 || 2).then();
        return true
      }
      return true
    }).closed
  }


  async syncData(retailShopId: string): Promise<boolean> {
    let params = {__retail_shop_id__equal: retailShopId, __limit: 500, __page: 1};
    let product_params = params;
    product_params['__include'] = ['similar_products', 'available_stocks', 'brand', 'distributor'];
    product_params['__exclude'] = ['links'];
    product_params['__is_disabled__bool'] = 'false';
    this._distributorService.saveDistributors(params);
    this._brandService.saveBrands(params);
    this._tagService.saveTags(params);
    this._taxService.saveTaxes(params);
    this._saltService.saveSalts(params);
    return await this._itemService.saveProducts(product_params).then(()=>{
      this.updateStockTime(retailShopId);
      return true
    });

  }


  updateStockTime(retailShopId: string): void {
    this._indexDB.configs.add({stock_time: new Date().toJSON().substring(0, 10), shop_id: retailShopId}).then(()=>{
    },()=>{
      this._indexDB.configs.update(retailShopId, {stock_time: new Date().toJSON(),
        shop_id: retailShopId}).then(()=>{
      }, (err)=>{
        console.log(err);
      })
    });
  }

}
