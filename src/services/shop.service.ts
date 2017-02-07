import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';
import {
  Product, Brand, Distributor, Tag, Tax, ItemsService, TagsService, TaxsService,
  DistributorService, BrandsService
} from "./items.service";
import {UsersService} from "./users.service";
import {IndexDBServiceService} from "./indexdb.service";


export interface RetailShop {
  id: number;
  name: string;
  products: Product[];
  total_sales: {
    total_sales: number;
    total_orders: number;
    total_items: number;
  };
  brands: Brand[];
  distributors: Distributor[];
  tags: Tag[];
  taxes: Tax[];
  _link: {};
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
              private _distributorService: DistributorService,
              private _brandService: BrandsService,) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/retail_shop',
    });
  }

  set shop(data: RetailShop){
    this._shop = data;
    this._shop$.next(this.shop);
  }

  set shops(data: RetailShop[]){
    this._shops = data;
    this.shops.forEach((value)=>{
      this._indexDB.shops.add(value).then(()=>{},
        ()=>{
          this._indexDB.shops.update(value.id, value).then()
        })
    });

    this._shops$.next(this.shops);
  }

  get shop$(): Observable<RetailShop>{
    return this._shop$.asObservable();
  }
  get shops$(): Observable<RetailShop[]>{
    return this._shops$.asObservable();
  }
  get shop(): RetailShop{
    return this._shop
  }

  get shops(): RetailShop[]{
    return this._shops
  }



  syncData(retailShopId: number): void {
    let params = {__retail_shop_id__exact: retailShopId, __limit:200, __page:1};

    this._itemService.saveProducts(params);
    this._distributorService.saveDistributors(params);
    this._brandService.saveBrands(params);
    this._tagService.saveTags(params);
    this._taxService.saveTaxes(params);

  }

}
