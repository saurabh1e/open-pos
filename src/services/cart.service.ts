import { Injectable } from '@angular/core';
import {Order, Item, ItemTax, Discount, OrderItemsService} from "./orders.service";
import {Subject, Observable} from "rxjs";
import {IndexDBServiceService} from "./indexdb.service";
import {Product, Tax, Stock} from "./items.service";
import {Customer, Address} from "./customer.service";

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

@Injectable()
export class CartService {

  _cart : Order;
  _cart$: Subject<Order> = <Subject<Order>>  new Subject();
  ipcRenderer: any;

  constructor(private _indexDB: IndexDBServiceService) {
    try {
      this.ipcRenderer = electron.ipcRenderer;
    }

    catch(err){

    }

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

  getProduct(items: Item[], productId: string, stockId: string): Item{
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
    cart.additional_discount = cart.discounts.reduce((acc, discount)=>{
       return acc + round(discount.value, 2)
    }, 0);
    cart.items.forEach((item)=>{
      item.total_price = round(item.unit_price*item.quantity, 2);
      let discount = item.discount + cart.additional_discount<=100?item.discount + cart.additional_discount:100;
      item.discounted_unit_price = round(item.unit_price-(item.unit_price*discount)/100, 2);
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
    item.batch_number = stock.batch_number;
    item.max_units = stock.units_purchased-stock.units_sold;
    item.default_quantity = product.default_quantity?product.default_quantity:product.is_loose?0.1:1;
    item.is_loose = product.is_loose;
    item.quantity = qty&&qty<=item.max_units?qty:1;
    item.stock_id = stock.id;
    item.taxes = [];
    product.taxes.forEach((value)=>{
      let tax = <ItemTax>{tax_id: value.id, tax_value: value.value, tax: value};
      item.taxes.push(tax)
    });

    return item
  }

  async setCart(data: Order, localId: string): Promise<boolean>{
    return await this._indexDB.carts.update(localId, data).then(()=>{
      return true
    })
  }
  async getCart(localId: string): Promise<Order> {
    return await this._indexDB.carts.get(localId).then((cart)=>{
      return cart;
    })
  }

  async newCart(id: string, invoiceNumber: number): Promise<string>{
    let localId = JSON.stringify(Math.floor(Math.random() * (9999 - 999 + 1)) + 999);
    let referenceNumber = '';
    try{
      referenceNumber = this.ipcRenderer.sendSync('generateReferenceNumber');
    }
    catch (err){

    }

    let discount = <Discount>{value:0, type:'PERCENTAGE'};
    let order = <Order>{retail_shop_id: id, local_id: localId, created_on: new Date(),
      discounts:[discount], customer: <Customer>{}, address: <Address>{}, items: <Item[]>[],
      reference_number: referenceNumber};
    return  this._indexDB.carts.add(order).then(()=>{
        return order.local_id;
      });
  }

  async deleteCart(cartId: string): Promise<boolean>{
    return this._indexDB.carts.delete(cartId).then(()=>{
      return true
    })
  }

  async addProduct(cartId: string, product: Product, stock: Stock, qty?: number): Promise<Order> {
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

  async updateQuantity(cartId: string, productId: string, stockId: string, qty?: number): Promise<Order>{
    return await this.getCart(cartId).then((cart)=> {
      let item = this.getProduct(cart.items, productId, stockId);
      item.quantity = qty&&qty<=item.max_units?qty:item.quantity<item.max_units?item.quantity+1:item.max_units;
      return this.calcTotal((cart));
    })
  }

  async removeProduct(cartId: string, productId: string, stockId: string): Promise<Order> {
    return await this.getCart(cartId).then((cart)=> {
      let item = this.getProduct(cart.items, productId, stockId);
      cart.items.splice(cart.items.indexOf(item), 1);
      return this.calcTotal(cart);
    })
  }
  async updateDiscount(cartId: string, productId: string, stockId: string, discount: number): Promise<Order> {
    return await this.getCart(cartId).then((cart)=> {
      let item = this.getProduct(cart.items, productId, stockId);
      item.discount = discount;
      return this.calcTotal(cart);
    })
  }
  async updateOrderDiscount(cartId: string, discount: number): Promise<Order> {
    return await this.getCart(cartId).then((cart)=> {
      cart.discounts[0].value = discount;
      return this.calcTotal(cart);
    })
  }

  async updateStock(cart: Order): Promise<boolean>{
    try {
      cart.items.forEach((value)=>{
        return this._indexDB.products.get(value.product_id).then((data)=>{
          let stocks = data.available_stocks;
          let emptyStocks: number[] = [];
          stocks.forEach((stock, index)=>{
            if (stock.id == value.stock_id) {
              data.available_stock -= value.quantity;
              stock.units_sold += value.quantity;
            }
            if (stock.units_sold >= stock.units_purchased) {
              emptyStocks.push(index)
            }
          });
          emptyStocks.forEach((emptyStock)=>{
            stocks.splice(emptyStock, 1);
          });
          data.available_stocks = stocks;
          this._indexDB.products.update(data.id, data).then(()=>{
            return true
          },(err)=>{
            console.log(err);
          });
          return true
        }, (err)=>{
          console.log(err);
        })
      });
      return true
    }
    catch (err) {
      console.log(err);
      return false
    }

  }

}
