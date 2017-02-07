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
    this.carts = <Order[]>[];
  }

  set carts(data: Order[]) {
    this._carts = data;
    this.carts.forEach((cart)=>{
      this._indexDB.carts.add(cart).then((result)=>{

      }, (err)=>{
        this._indexDB.carts.update(cart.local_id, cart)
      })
    });

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

  async newCart(id: number): Promise<number>{
    let order = <Order>{};
    order.retail_shop_id = id;
    return await this._indexDB.carts.count().then((count)=>{
      order.local_id = count+1;
      order.total = 0;
      order.created_on = new Date();
      this.carts = this.carts.concat(order);
      return order.local_id
    });

  }

  async deleteCart(cart: Order): Promise<boolean>{
    this.carts.splice(this.carts.indexOf(cart), 1);
    return this._indexDB.carts.delete(cart.local_id).then(()=>{
      return true
    })
  }

}
