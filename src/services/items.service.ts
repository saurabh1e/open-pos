import {Injectable} from "@angular/core";
import {HttpInterceptorService, RESTService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";
import {Observable} from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import {IndexDBServiceService} from "./indexdb.service";
import {RetailShop} from "./shop.service";

import {Response} from "@angular/http";

export interface Product {

  available_stock: number,
  barcode: string,
  available_stocks: Stock[],
  similar_products?: string[],
  description?: {key: string, value: string}[],
  sub_description: string;
  is_disabled: boolean;
  is_loose: boolean;
  id: string,
  quantity_label: string,
  min_stock: number,
  mrp: number,
  default_quantity: number,
  last_selling_amount?: number;
  stock_required?: number;
  last_purchase_amount?: number
  auto_discount: number;
  name: string,
  tags?: Tag[],
  salts?: Salt[],
  taxes?: Tax[]
  brand_id: string;
  brand_name: string;
  retail_shop_id: string;
  brand: Brand;
  distributors: Distributor[];
  retail_shop: RetailShop;
}

export interface Stock {

  id: string;
  expiry_date: Date;
  purchase_amount: number;
  purchase_date: Date;
  selling_amount: number;
  quantity_label: string,
  batch_number: string,
  is_loose: boolean;
  units_purchased: number;
  units_sold: number,
  add?: boolean;
  product_id: string;
  product?: Product;
  default_stock: boolean;
  distributor_bill?: DistributorBill;
}

export interface DistributorBill {
  id: string;
  reference_number: string
  distributor: Distributor;
  purchase_date: Date;
  distributor_id: string;
  purchased_items?: Stock[];
  bill_amount: number;
}

export interface Tag {
  id: string;
  name: string;
  retail_shop_id?: string;
  retail_shop?: RetailShop;
}

export interface Salt {
  id: string;
  name: string;
  retail_shop_id?: string;
  retail_shop?: RetailShop;
}

export interface Tax {
  id: string;
  name: string;
  is_disabled?: boolean;
  retail_shop_id?: string;
  value?: number;
  retail_shop?: RetailShop;
}


export interface Distributor {
  id: string;
  name: string
  retail_shop_id?: string;
  retail_shop?: RetailShop;
  phone_numbers?: number[];
  emails?: string[];
  products: Product[];
  brands: Brand[];
}

export interface Brand {
  id: string;
  name: string
  retail_shop_id?: string;
  retail_shop?: RetailShop;
  distributors?: Distributor[];
}

export interface ProductSalt {
  id: string;
  product_id: string;
  salt_id: string;
}

export interface ProductTag {
  id: string;
  product_id: string;
  tag_id: string;
}

@Injectable()
export class ItemsService extends RESTService<Product> {

  _product: Product = <Product>{};
  _products: Product[];

  _products$: Subject<Product[]> = <Subject<Product[]>>  new Subject();
  _product$: Subject<Product> = <Subject<Product>>  new Subject();

  constructor(private _http: HttpInterceptorService,
              private _indexDB: IndexDBServiceService) {
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
    this._product$.next(this.product);
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

  get product$(): Observable<Product> {
    return this._product$.asObservable();
  }

  updateTag(productId: string, tagId: string, action: string): Observable<Response> {
    return this._http.post(MOCK_API+'product_tag', {__action: action, product_id: productId, tag_id: tagId})
      .map(data=>data.json())
  }

  updateTax(productId: string, taxId: string, action: string): Observable<Response> {
    return this._http.post(MOCK_API+'product_tax', {__action: action, product_id: productId, tax_id: taxId})
      .map(data=>data.json())
  }

  updateSalt(productId: string, saltId: string, action: string): Observable<Response> {
    return this._http.post(MOCK_API+'product_salt', {__action: action, product_id: productId, salt_id: saltId})
      .map(data=>data.json())
  }


  async updateProduct(productId: string): Promise<boolean> {
    return  await this.query({__id__equal: productId, __include: ['distributors', 'brands', 'available_stocks',
      'similar_products']})
      .subscribe((data: {data: Product[]}) => {
        return this._indexDB.products.add(data.data[0]).then(() => {
            return true
          },
          () => {
            this._indexDB.products.update(data.data[0].id, data.data[0]).then(() => {
              return true
            })
          });
      }, () => {
        return false
      }).closed;
  }

  async saveProducts(params?) {
    this.query(params).subscribe((data: {data: Product[], total: number}) => {
      data.data.forEach((value) => {
        this._indexDB.products.add(value).then(() => {

          },
          () => {
            this._indexDB.products.update(value.id, value).then()
          })
      });

      return Observable.forkJoin([])

    }, (err) => {
      console.error(err);
      return Observable.forkJoin([])
    })
  }

  syncProducts(params: any): Observable<{data: Product[]}> {
    return this.query(params);
  }

  productObservableFork(params: any, total: number): Observable<{}[]>{
    let arr = [];
    if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
      let pages: number = Math.ceil(total / params['__limit']);
      for (let i=2; i<=pages; i++) {
        params['__page'] = i;
        arr.push(this.query(Object.assign({}, params)));
      }
      if (!arr.length) {
        this._indexDB._db$.next({status: true})
      }
      return Observable.forkJoin(arr)
    }
  }

}

@Injectable()
export class DistributorService extends RESTService<Distributor> {

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
    this.query(params).subscribe((data: {data: Distributor[], count: number}) => {
      data.data.forEach((value) => {
        this._indexDB.distributors.add(value).then(() => {
          },
          () => {
            this._indexDB.distributors.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params) {
        if (params['__limit'] == data.data.length) {
          params['__page'] += 1;
          this.saveDistributors(params);
        }
      }
    }, (err) => {
      console.error(err)
    })
  }

}

@Injectable()
export class BrandsService extends RESTService<Brand> {

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
    this.query(params).subscribe((data: {data: Brand[], total: number}) => {
      data.data.forEach((value) => {
        this._indexDB.brands.add(value).then(() => {
          },
          () => {
            this._indexDB.brands.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
        let pages: number = data.total / params['__limit'];
        for (let i=1; i<=pages; i++) {
          params['__page'] = i;
          this.saveBrands(params);
        }

      }
    }, (err) => {
      console.error(err)
    })
  }
  sync(params: any): Observable<{data: Brand[], total: number}> {
    return this.query(params)
  }
  updateDistributor(brandId: string, distributorId: string, action: string): Observable<Response> {
    return this._http.post(MOCK_API+'brand_distributor', {__action: action, brand_id: brandId, distributor_id: distributorId})
      .map(data=>data.json())
  }

  brandObservableFork(params: any, total: number): Observable<{}[]>{
    let arr = [];
    if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
      let pages: number = Math.ceil(total / params['__limit']);
      for (let i=2; i<=pages; i++) {
        params['__page'] = i;
        arr.push(this.query(Object.assign({}, params)));
      }
      return Observable.forkJoin(arr)
    }
  }
}

@Injectable()
export class TagsService extends RESTService<Tag> {

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
    this.query(params).subscribe((data: {data: Tag[], count: number}) => {
      data.data.forEach((value) => {
        this._indexDB.tags.add(value).then(() => {
          },
          () => {
            this._indexDB.tags.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params) {
        if (params['__limit'] == data.data.length) {
          params['__page'] += 1;
          this.saveTags(params);
        }
      }
    }, (err) => {
      console.error(err)
    })
  }
}


@Injectable()
export class SaltsService extends RESTService<Salt> {

  _salt: Salt = <Salt>{};
  _salts: Salt[];

  _salts$: Subject<Salt[]> = <Subject<Salt[]>>  new Subject();

  constructor(private _http: HttpInterceptorService, private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/salt',
    });

  }

  set salts(data: Salt[]) {
    this._salts = data;
    this._salts$.next(this.salts);
  }

  set salt(data: Salt) {
    this._salt = data;
  }

  get salt(): Salt {
    return this._salt;
  }

  get salts(): Salt[] {
    return this._salts;
  }

  get salts$(): Observable<Salt[]> {
    return this._salts$.asObservable();
  }

  saveSalts(params?): void {
    this.query(params).subscribe((data: {data: Salt[], total: number}) => {
      data.data.forEach((value) => {
        this._indexDB.salts.add(value).then(() => {
          },
          () => {
            this._indexDB.salts.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
        let pages: number = data.total / params['__limit'];
        for (let i=1; i<=pages; i++) {
          params['__page'] = i;
          this.saveSalts(params)
        }
      }
    }, (err) => {
      console.error(err)
    })
  }
  sync(params: any): Observable<{data: Salt[], total: number}> {
    return this.query(params)
  }

  saltObservableFork(params: any, total: number): Observable<{}[]>{
    let arr = [];
    if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
      let pages: number = Math.ceil(total / params['__limit']);
      for (let i=2; i<=pages; i++) {
        params['__page'] = i;
        arr.push(this.query(Object.assign({}, params)));
      }
      return Observable.forkJoin(arr)
    }
  }
}


@Injectable()
export class TaxsService extends RESTService<Tax> {

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
    this.query(params).subscribe((data: {data: Tax[], count: number}) => {
      data.data.forEach((value) => {
        this._indexDB.taxes.add(value).then(() => {
          },
          () => {
            this._indexDB.taxes.update(value.id, value)
          })
      });
      if (params && '__limit' in params && '__page' in params) {
        if (params['__limit'] == data.data.length) {
          params['__page'] += 1;
          this.saveTaxes(params);
        }
      }
    }, (err) => {
      console.error(err)
    })
  }

}


@Injectable()
export class StocksService extends RESTService<Stock> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/stock',
    });

  }

  post(body: Stock[]): Observable<Response> {
    return this._http.post(MOCK_API+'stock', body).map(data=>data.json())
  }

}

@Injectable()
export class DistributorBillsService extends RESTService<DistributorBill> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/distributor_bill',
    });

  }

}


@Injectable()
export class ProductSaltService extends RESTService<ProductSalt> {

  constructor(private _http: HttpInterceptorService, private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/product_salt',
    });

  }

  sync(params: any): Observable<{data: ProductSalt[], total: number}> {
    return this.query(params)
  }
  productSaltObservableFork(params: any, total: number): Observable<{}[]>{
    let arr = [];
    if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
      let pages: number = Math.ceil(total / params['__limit']);
      for (let i=2; i<=pages; i++) {
        params['__page'] = i;
        arr.push(this.query(Object.assign({}, params)));
      }
      console.log(arr);
      return Observable.forkJoin(arr)
    }
  }
}


@Injectable()
export class ProductTagService extends RESTService<ProductTag> {

  constructor(private _http: HttpInterceptorService, private _indexDB: IndexDBServiceService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/product_tag',
    });

  }

  sync(params: any): Observable<{data: ProductTag[], total: number}> {
    return this.query(params)
  }

  productTagObservableFork(params: any, total: number): Observable<{}[]>{
    let arr = [];
    if (params && '__limit' in params && '__page' in params && params['__page'] === 1) {
      let pages: number = Math.ceil(total / params['__limit']);
      for (let i=2; i<=pages; i++) {
        params['__page'] = i;
        arr.push(this.query(Object.assign({}, params)));
      }
      return Observable.forkJoin(arr)
    }
  }

}
