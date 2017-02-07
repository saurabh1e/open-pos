import { Injectable } from '@angular/core';
import {Order} from "./orders.service";
import {Subject} from "rxjs";
import {IndexDBServiceService} from "./indexdb.service";



@Injectable()
export class CartService {


  _carts : Order[];
  _currentCart : Order;
  _carts$: Subject<Order[]> = <Subject<Order[]>>  new Subject();

  constructor(private _indexDB: IndexDBServiceService) {

  }

  set carts(data: Order[]) {
    this._carts = data;
    this._carts$.next(this.carts);
  }
  set currentCart(data: Order) {
    this._currentCart = data;
  }

  get carts(): Order[] {
    return this._carts
  }
  get currentCart():Order {
    return this._currentCart
  }

  async newCart(id: number): Promise<Order>{
    let order = <Order>{};
    order.retail_shop_id = id;
    console.log(this._currentCart);
    return await this._indexDB.carts.count().then((count)=>{
      order.local_id = count;
      this._currentCart = order;
      return this._currentCart;
    });

  }


}
