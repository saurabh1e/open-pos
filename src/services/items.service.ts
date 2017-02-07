import {Injectable} from "@angular/core";
import {HttpInterceptorService, RESTService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";
import {Subject, Observable} from "rxjs";
import {Status,IndexDBServiceService} from "./indexdb.service";


export interface Product {

  available_stock: number,
  available_stocks: Stock[],
  description: string,
  id: number,
  min_stock: number,
  mrp: number,
  auto_discount: number;
  name: string,
  tags: Tag[],
  taxes: string[]
  brand_id: number;
  brand_name: string;
  distributor_id: number;
  retail_shop_id: number;
}

export interface Stock {

  expiry_date: Date;
  purchase_amount: number;
  purchase_date: Date;
  selling_amount: number;
  units_purchased: number;
  units_sold: number

}

export interface Tag {
  id: number;
  name: string;
  retail_shop_id: number;
}

export interface Tax {
  id: number;
  name: string;
  retail_shop_id: number;
  value: number;
}


export interface Distributor {
  id: number;
  name: string
  retail_shop_id: number;
}

export interface Brand {
  id: number;
  name: string
  retail_shop_id: number;
}


@Injectable()
export class ItemsService extends RESTService<any> {

  _product: Product = <Product>{};
  _products: Product[];

  _products$: Subject<Product[]> = <Subject<Product[]>>  new Subject();

  constructor(private _http: HttpInterceptorService, private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/product',
    });

  }

  set products(data: Product[]) {
    this._products = data;
    this._products$.next(this.products);
  }

  set product(data: Product) {
    this._product = data;
  }

  get product(): Product {
    return this._product;
  }

  get products(): Product[] {
    return this._products;
  }

  get products$(): Observable<Product[]> {
    return this._products$.asObservable();
  }

  saveProducts(params?): void {

    this.query(params).subscribe((data: {data: Product[], count: number})=>{
      data.data.forEach((value)=>{
        this._indexDB.products.add(value).then(()=>{},
          ()=>{
          this._indexDB.products.update(value.id, value).then()
        })
      });
      if (params && '__limit' in params && '__page' in params) {
        if (params['__limit']==data.data.length) {
          params['__page']+=1;
          this.saveProducts(params);
        }
        else {
          let status: Status = <Status>{};
          status.status = true;
          console.log(data);
          this._indexDB._db$.next(status);
        }
      }

    }, (err) => {
      console.log(err)
    })
  }

}

@Injectable()
export class DistributorService extends RESTService<any> {

  _distributor: Distributor = <Distributor>{};
  _distributors: Distributor[];

  _distributors$: Subject<Distributor[]> = <Subject<Distributor[]>>  new Subject();

  constructor(private _http: HttpInterceptorService, private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/distributor',
    });

  }

  set distributors(data: Distributor[]) {
    this._distributors = data;
    this._distributors$.next(this.distributors);

  }

  set distributor(data: Distributor) {
    this._distributor = data;
  }

  get distributor(): Distributor {
    return this._distributor;
  }

  get distributors(): Distributor[] {
    return this._distributors;
  }

  get distributors$(): Observable<Distributor[]> {
    return this._distributors$.asObservable();
  }
  saveDistributors(params?): void {
    this.query(params).subscribe((data: {data: Distributor[], count: number})=>{
      data.data.forEach((value)=>{
        this._indexDB.distributors.add(value).then(()=>{},
          ()=>{
            this._indexDB.distributors.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params) {
        if (params['__limit']==data.data.length) {
          params['__page']+=1;
          this.saveDistributors(params);
        }
      }
    }, (err) => {
      console.log(err)
    })
  }

}

@Injectable()
export class BrandsService extends RESTService<any> {

  _brand: Brand = <Brand>{};
  _brands: Brand[];

  _brands$: Subject<Brand[]> = <Subject<Brand[]>>  new Subject();

  constructor(private _http: HttpInterceptorService, private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/brand',
    });

  }

  set brands(data: Brand[]) {
    this._brands = data;
    this._brands$.next(this.brands);
  }

  set brand(data: Brand) {
    this._brand = data;
  }

  get brand(): Brand {
    return this._brand;
  }

  get brands(): Brand[] {
    return this._brands;
  }

  get brands$(): Observable<Brand[]> {
    return this._brands$.asObservable();
  }

  saveBrands(params?): void {
    this.query(params).subscribe((data: {data: Brand[], count: number})=>{
      data.data.forEach((value)=>{
        this._indexDB.brands.add(value).then(()=>{},
          ()=>{
            this._indexDB.brands.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params) {
        if (params['__limit']==data.data.length) {
          params['__page']+=1;
          this.saveBrands(params);
        }
      }
    }, (err) => {
      console.log(err)
    })
  }

}

@Injectable()
export class TagsService extends RESTService<any> {

  _tag: Tag = <Tag>{};
  _tags: Tag[];

  _tags$: Subject<Tag[]> = <Subject<Tag[]>>  new Subject();

  constructor(private _http: HttpInterceptorService, private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/tag',
    });

  }

  set tags(data: Tag[]) {
    this._tags = data;
    this._tags$.next(this.tags);
  }

  set tag(data: Tag) {
    this._tag = data;
  }

  get tag(): Tag {
    return this._tag;
  }

  get tags(): Tag[] {
    return this._tags;
  }

  get tags$(): Observable<Tag[]> {
    return this._tags$.asObservable();
  }
  saveTags(params?): void {
    this.query(params).subscribe((data: {data: Tag[], count: number})=>{
      data.data.forEach((value)=>{
        this._indexDB.tags.add(value).then(()=>{},
          ()=>{
            this._indexDB.tags.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params) {
        if (params['__limit']==data.data.length) {
          params['__page']+=1;
          this.saveTags(params);
        }
      }
    }, (err) => {
      console.log(err)
    })
  }
}

@Injectable()
export class TaxsService extends RESTService<any> {

  _tax: Tax = <Tax>{};
  _taxes: Tax[];

  _taxes$: Subject<Tax[]> = <Subject<Tax[]>>  new Subject();

  constructor(private _http: HttpInterceptorService, private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/tax',
    });

  }

  set taxes(data: Tax[]) {
    this._taxes = data;
    this._taxes$.next(this.taxes);
  }

  set tax(data: Tax) {
    this._tax = data;
  }

  get tax(): Tax {
    return this._tax;
  }

  get taxes(): Tax[] {
    return this._taxes;
  }

  get taxes$(): Observable<Tax[]> {
    return this._taxes$.asObservable();
  }
  saveTaxes(params?): void {
    this.query(params).subscribe((data: {data: Tax[], count: number})=>{
      data.data.forEach((value)=>{
        this._indexDB.taxes.add(value).then(()=>{},
          ()=>{
            this._indexDB.taxes.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params) {
        if (params['__limit']==data.data.length) {
          params['__page']+=1;
          this.saveTaxes(params);
        }
      }
    }, (err) => {
      console.log(err)
    })
  }

}
