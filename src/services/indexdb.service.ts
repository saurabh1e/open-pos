import {Subject, Observable} from "rxjs";

import Dexie  from 'dexie';
import {Product, Distributor, Tag, Brand, Tax, Salt} from "./items.service";
import {Injectable} from "@angular/core";
import {RetailShop} from "./shop.service";
import {Order} from "./orders.service";
import {Locality} from "./customer.service";
import {IUser} from "./users.service";


export interface Status {
  status: boolean;

}

@Injectable()
export class IndexDBServiceService extends Dexie {
  products: Dexie.Table<Product, number>;
  distributors: Dexie.Table<Distributor, number>;
  brands: Dexie.Table<Brand, number>;
  tags: Dexie.Table<Tag, number>;
  salts: Dexie.Table<Salt, number>;
  taxes: Dexie.Table<Tax, number>;
  shops: Dexie.Table<RetailShop, number>;
  orders: Dexie.Table<Order, number>;
  localities: Dexie.Table<Locality, number>;
  carts: Dexie.Table<Order, number>;
  users: Dexie.Table<IUser, number>;

  _db$: Subject<Status> = <Subject<Status>> new Subject;

  constructor() {
    super("myPosDB");
    this.version(1).stores(
      {
        products: "++id,name,retail_shop_id,brand_id,distributor_id",
        distributors: "++id,name,retail_shop_id",
        brands: "++id,name,retail_shop_id",
        tags: "++id,name,retail_shop_id",
        salts: "++id,name,retail_shop_id",
        taxes: "++id,name,retail_shop_id",
        shops: "++id, name",
        orders: "++id",
        carts: "++local_id,id,retail_shop_id",
        localities: "++id, name",
        users: "++id, mobile_number, email"
      });
  }
  get db$():Observable<Status>{
    return this._db$.asObservable();
  }
}
