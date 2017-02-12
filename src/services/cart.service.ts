import { Injectable } from '@angular/core';
import {Order, Item, ItemTax} from "./orders.service";
import {Subject, Observable} from "rxjs";
import {IndexDBServiceService} from "./indexdb.service";
import {Product, Tax, Stock} from "./items.service";

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

@Injectable()
export class CartService {

  _cart : Order;
  _cart$: Subject<Order> = <Subject<Order>>  new Subject();

  constructor(private _indexDB: IndexDBServiceService) {
  }

  set cart(data: Order) {
    this._cart = data;
    this._cart$.next(this.cart);
  }

  get cart():Order {
    return this._cart
  }

  get cart$():Observable<Order>{
    return this._cart$.asObservable();
  }

  getProduct(items: Item[], productId: number, stockId: number): Item{
    return items.find((value)=> {
      if (value.product_id == productId && value.stock_id == stockId) {
        return true
      }
    })
  }

  async calcTotal(cart: Order): Promise<Order>{

    cart.total = 0;
    cart.auto_discount = 0;
    cart.taxes = {total:0};
    cart.items.forEach((item)=>{
      item.total_price = item.unit_price*item.quantity;
      item.discounted_unit_price = round(item.unit_price-(item.unit_price*item.discount)/100, 2);
      item.discounted_total_price = round(item.discounted_unit_price*item.quantity, 2);

      item.taxes.forEach((itemTax)=>{
        itemTax.tax_amount = round(item.discounted_total_price * itemTax.tax_value/100, 2);
        if (itemTax.tax.name in cart.taxes){
          cart.taxes[itemTax.tax.name] = round(cart.taxes[itemTax.tax.name] + itemTax.tax_amount, 2);
        }
        else {
          cart.taxes[itemTax.tax.name] = itemTax.tax_amount;
        }
        cart.taxes.total = round(cart.taxes.total +itemTax.tax_amount, 2);
      });
      cart.auto_discount = cart.auto_discount + round(item.total_price - item.discounted_total_price, 2);
      cart.total = round(cart.total + item.total_price, 2);
    });
    cart.sub_total = cart.total - cart.taxes.total;
    return await this.setCart(cart, cart.local_id).then(()=>{
      return cart
    })
  }

  createItem(product: Product, stock: Stock, qty?: number): Item{
    let item = <Item>{};
    item.product_id = product.id;
    item.name = product.name;
    item.discount = product.auto_discount;
    item.discount = product.auto_discount;
    item.unit_price = stock.selling_amount;
    item.max_units = stock.units_purchased-stock.units_sold;
    item.quantity = qty&&qty<=item.max_units?qty:1;
    item.stock_id = stock.id;
    item.taxes = [];
    product.taxes.forEach((value)=>{
      let tax = <ItemTax>{tax_id: value.id, tax_value: value.value, tax: value};
      item.taxes.push(tax)
    });

    return item
  }

  async setCart(data: Order, localId: number): Promise<boolean>{
    return await this._indexDB.carts.update(localId, data).then(()=>{
      return true
    })
  }
  async getCart(localId: number): Promise<Order> {
    return await this._indexDB.carts.get(localId).then((cart)=>{
      return cart;
    })
  }

  async newCart(id: number): Promise<number>{
    return await this._indexDB.carts.orderBy('local_id').last().then((cart)=>{
      let localId = 1;
      if (cart)
         localId = cart.local_id+1;
      let order = <Order>{retail_shop_id: id, local_id: localId, created_on: new Date() ,items: <Item[]>[], total:0};

      return  this._indexDB.carts.add(order).then(()=>{
        return order.local_id;
      });
    });
  }

  async deleteCart(cart: Order): Promise<boolean>{
    return this._indexDB.carts.delete(cart.local_id).then(()=>{
      return true
    })
  }

  async addProduct(cartId: number, product: Product, stock: Stock, qty?: number): Promise<Order> {
    return await this.getCart(cartId).then((cart)=> {
      let item = this.getProduct(cart.items, product.id, stock.id);
      let units_available = stock.units_purchased-stock.units_sold;
      if (item){
        item.quantity = qty&&qty<=units_available?qty:item.quantity<units_available?item.quantity+1:units_available;
      }
      else {
        cart.items.push(this.createItem(product, stock, qty));
      }
      return this.calcTotal((cart));
    })
  }

  async updateQuantity(cartId: number, productId: number, stockId: number, qty?: number): Promise<Order>{
    return await this.getCart(cartId).then((cart)=> {
      let item = this.getProduct(cart.items, productId, stockId);
      item.quantity = qty&&qty<=item.max_units?qty:item.quantity<item.max_units?item.quantity+1:item.max_units;
      return this.calcTotal((cart));
    })
  }

  async removeProduct(cartId: number, productId: number, stockId: number): Promise<Order> {
    return await this.getCart(cartId).then((cart)=> {
      let item = this.getProduct(cart.items, productId, stockId);
      cart.items.splice(cart.items.indexOf(item), 1);
      return this.calcTotal(cart);
    })
  }
  async updateDiscount(cartId: number, productId: number, stockId: number, discount: number): Promise<Order> {
    return await this.getCart(cartId).then((cart)=> {
      let item = this.getProduct(cart.items, productId, stockId);
      item.discount = discount;
      return this.calcTotal(cart);
    })
  }

}
