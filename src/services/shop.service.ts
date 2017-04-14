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
  SaltsService, StocksService, Stock, ProductTagService, ProductSaltService, ProductSalt, ProductTag, Salt
} from "./items.service";
import {Config, IndexDBServiceService} from "./indexdb.service";
import {Address} from "./customer.service";
import {OrderItemsService} from "./orders.service";
import {UsersService} from "./users.service";


export interface RetailShop {
  id: string;
  name?: string;
  retail_brand_id?: string;
  products?: Product[];
  registration_details?: RegistrationDetail[];
  total_sales?: {
    total_sales: number;
    total_orders: number;
    total_items: number;
  };
  retail_brand?: RetailBrand;
  address?: Address;
  brands?: Brand[];
  distributors?: Distributor[];
  tags?: Tag[];
  taxes?: Tax[];
  _link?: {};
  invoice_number: number;
  printer_config?: PrinterConfig;
}

export interface PrinterConfig {
  header:string;
  footer:string;
  bill_template:string;
  receipt_template:string;
  bill_printer_type:string;
  receipt_printer_type:string;
  label_printer_type:string;

  have_receipt_printer:boolean;
  have_bill_printer:boolean;

  retail_shop_id:string;
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
              private _productTagService: ProductTagService,
              private _productSaltService: ProductSaltService,
              private _orderItemService: OrderItemsService,
              private _brandService: BrandsService,
              private _saltService: SaltsService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/retail_shop',
    });

  }

  set shop(data: RetailShop) {
    this._shop = data;
    this._indexDB.configs.toArray().then((config: Config[])=>{
      config.forEach((value)=>{
        value.is_selected = value.shop_id === data.id;
      });
      this._indexDB.configs.bulkPut(config).then(()=>{
      })
    });
    this._shop$.next(this.shop);
  }

  set shops(data: RetailShop[]) {

    // invoice number sync

    data.forEach((value) => {
      this._indexDB.configs.get(value.id).then((data)=>{
        if (data.invoiceNumber !== value.invoice_number){
          if (data.invoiceNumber > value.invoice_number) {
            this.update(value.id, {id: value.id, invoice_number: data.invoiceNumber}).subscribe(()=>{
              value.invoice_number = data.invoiceNumber
            })
          }
          else {
            this._indexDB.configs.update(value.id, {invoiceNumber: value.invoice_number}).then()
          }
        }
      });
      this._indexDB.shops.add(value).then(() => {
        },
        () => {
          this._indexDB.shops.update(value.id, value).then()
        })
    });

    this._shops = data;
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
      if (data && data.stock_time) {
        this.getProductUpdate(retailShopId, data.stock_time).then();
        this.getStockUpdate(data.stock_time, retailShopId).then();
        this.getOrderItemUpdate(retailShopId, data.stock_time).then();
        this.updateStockTime(retailShopId);
      }
      return true
    });
  }

  async getProductUpdate(retailShopId: string, date?: string, optionalParams?: any): Promise<boolean> {
    let productParams = {__retail_shop_id__equal: retailShopId, __limit: 100, __page: 1, __is_disabled__bool: false,
      __include: ['available_stocks', 'brand'], __exclude: ['_links', 'distributors', 'similar_products']};

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
      __only: ['id', 'product_id'], __distinct_by: 'product_id',
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

  async getProductSaltUpdate(date: string, retailShopId: string, pageNumber?: number): Promise<boolean> {
    let saltParams = {__retail_shop_id__equal: retailShopId, __limit: 100, __page: pageNumber || 1,
      __only: ['id', 'product_id'], __distinct_by: 'product_id',
      __updated_on__date_gte: date};
    return await this._productSaltService.query(saltParams).subscribe((data: {data: ProductSalt[]})=>{

      let productId: string[] = data.data.map((value)=>{
        return value.product_id;
      });
      if (productId.length) {
        this.getProductUpdate(retailShopId, null, {__id__in: productId}).then();
      }
      if (saltParams['__limit']==data.data.length) {
        this.getProductSaltUpdate(date, retailShopId, pageNumber+1 || 2).then();
        return true
      }
      return true
    }).closed
  }

  async getOrderItemUpdate(retailShopId: string, date?: string,  pageNumber?: number, optionalParams?: any): Promise<boolean> {
    let orderItemParams = {
      __retail_shop_id__equal: retailShopId, __limit: 100, __page: pageNumber || 1, __distinct_by: 'product_id',
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
    let params = {__retail_shop_id__equal: retailShopId, __limit: 100, __page: 1};
    let product_params = Object.assign({}, params);
    product_params['__include'] = ['available_stocks', 'brand'];
    product_params['__exclude'] = ['_links', 'distributors', 'similar_products'];
    product_params['__is_disabled__bool'] = 'false';
    this._tagService.saveTags(Object.assign({}, params));
    this._taxService.saveTaxes(Object.assign({}, params));

    this._brandService.sync(Object.assign({}, params)).subscribe((data: {data:Brand[], total: number})=> {
      this._indexDB.brands.clear().then(() => {
        this._indexDB.brands.bulkAdd(data.data).then(() => {
          this._brandService.brandObservableFork(Object.assign({}, params), data.total)
            .subscribe((data: { data: Brand[] }[]) => {
              data.forEach((data) => {
                this._indexDB.brands.bulkAdd(data.data).then(() => {
                }, (err) => {
                });
              })
            });
        })
      });
    });

    this._saltService.sync(Object.assign({}, params)).subscribe((data: {data:Salt[], total: number})=> {
      this._indexDB.salts.clear().then(() => {
        this._indexDB.salts.bulkAdd(data.data).then(() => {
          this._saltService.saltObservableFork(Object.assign({}, params), data.total)
            .subscribe((data: { data: Salt[] }[]) => {
              data.forEach((data) => {
                this._indexDB.salts.bulkAdd(data.data).then(() => {
                }, (err) => {
                });
              })
            });
        })
      });
    });
    this._productTagService.sync(Object.assign({}, params)).subscribe((data: {data:ProductTag[], total: number})=> {
      this._indexDB.productTag.clear().then(() => {
        this._indexDB.productTag.bulkAdd(data.data).then(() => {
          this._productTagService.productTagObservableFork(Object.assign({}, params), data.total)
            .subscribe((data: { data: ProductTag[] }[]) => {
            data.forEach((data) => {
              this._indexDB.productTag.bulkAdd(data.data).then(() => {
              }, (err) => {
              });
            })
          });
        })
      });
    });

    this._productSaltService.sync(Object.assign({}, params)).subscribe((data: {data:ProductSalt[], total: number})=> {
      this._indexDB.productSalt.clear().then(() => {
        this._indexDB.productSalt.bulkAdd(data.data).then(() => {
          this._productSaltService.productSaltObservableFork(Object.assign({}, params), data.total)
            .subscribe((data: { data: ProductSalt[] }[]) => {
              data.forEach((data) => {
                this._indexDB.productSalt.bulkAdd(data.data).then(() => {
                }, (err) => {
                });
              })
            });
        })
      });
    });

    this._itemService.syncProducts(product_params).subscribe((data: {data: Product[], total: number}) => {
      this._indexDB.products.clear().then(()=>{
        this._indexDB.products.bulkAdd(data.data).then(()=>{
          this._itemService.productObservableFork(product_params, data.total).subscribe((data: {data:Product[]}[])=>{

            data.forEach((data)=>{
              this._indexDB.products.bulkAdd(data.data).then(()=>{}, (err)=>{
              });
            });
            this._indexDB._db$.next({status: true})
          }, ()=>{
            this._indexDB._db$.next({status: true})
          });
        })
      });

    });
    this.updateStockTime(retailShopId);
    return await  true;

  }


  updateStockTime(retailShopId: string): void {
    this._indexDB.configs.add({stock_time: new Date().toJSON().substring(0, 10), shop_id: retailShopId}).then(()=>{
    },()=>{
      this._indexDB.configs.update(retailShopId, {stock_time: new Date().toJSON(),
        shop_id: retailShopId}).then(()=>{
      }, (err)=>{
      })
    });
  }

}
