import { Component, OnInit } from '@angular/core';
import {Order, OrdersService} from "../../../services/orders.service";
import {MdDialogRef} from "@angular/material";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Customer, CustomerService, Address} from "../../../services/customer.service";
import {RetailShop} from "../../../services/shop.service";
import {Observable} from "rxjs";
import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  viewProviders: [CustomerService]
})
export class CheckoutComponent implements OnInit {

  cart: Order;
  shop: RetailShop;
  customers: {display: string, value: number}[];
  customer: Customer = <Customer>{addresses: <Address[]>[]};
  addresses: {display: string, value: number}[];
  address: any;
  digitsArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  denominationArray: {} = {1:0, 2:0, 5:0, 10:0, 20:0, 50:0, 100:0, 500:0, 1000:0, 2000:0};
  total: string = '0';

  constructor(public dialogRef: MdDialogRef<CheckoutComponent>,
              private _customerService: CustomerService,
              private _indexDB: IndexDBServiceService,
              private _orderService: OrdersService,
              private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'checkout',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngOnInit() {
    this._indexDB.shops.get(this.cart.retail_shop_id).then((shop)=>{
      this.shop = shop;
    })
  }

  close():void {
    this.dialogRef.close();
  }

  enterAmount(digit: string): void {
    this.total +=digit;
    this.cart.amount_paid = parseFloat(this.total);
  }
  clearAmount(): void{
    this.total=this.total.slice(0,-1);
    if (this.total.slice(-1) === '.'){
      this.total=this.total.slice(0,-1);
    }
    if (this.total.slice(-2, -1) === '.'){
      this.total=this.total.slice(0,-2);
    }
    this.cart.amount_paid = parseFloat(this.total);
  }
  clearDenomination():void {
    this.denominationArray = {1:0, 2:0, 5:0, 10:0, 20:0, 50:0, 100:0, 500:0, 1000:0, 2000:0};
  }


  getCustomers = (event):Observable<string[]> => {
    this._loadingService.register('checkout');
    if (parseInt(event)) {
      return this._customerService.query({__retail_brand_id__equal: this.shop.retail_brand_id,
        __number__contains: event,
        __limit:100,
        __only: ['id', 'name', 'mobile_number']}).map(data => data.data.map((item) => {
        this._loadingService.resolve('checkout');
          return {display: item.name + ' <'+item.mobile_number+'>', value: item.id}
        }))
    }
    else {
      return this._customerService.query({__retail_brand_id__equal: this.shop.retail_brand_id, __name__contains: event,
        __limit:100,
        __only: ['id', 'name', 'mobile_number']})
        .map(data => data.data.map((item) => {
          this._loadingService.resolve('checkout');
          return {display: item.name + ' <'+item.mobile_number+'>', value: item.id}
        }))
    }

  };

  addCustomer(): void {
    if (this.customers.length) {
      this._customerService.query({__id__equal: this.customers[0].value, __include: ['addresses'], __limit: 1}).subscribe((data: {data: Customer[]})=>{
        this.customer = data.data[0];
        this.addresses = this.customer.addresses.map((item)=>{
          return {display: item.name, value: item.id}
        })
      });
    }
    else {
      this.customer = <Customer>{addresses: <Address[]>[]};
    }
  }
  addAddress(): void {
    this.cart.address = {id: this.addresses[0].value, name:this.addresses[0].display}
  }
  removeAddress(): void {
    this.cart.address = null;
  }

  checkOut(): void {
    this._loadingService.register('checkout');
    this.cart.customer = this.customer;
    this._orderService.create(this.cart).subscribe(()=>{
      this._loadingService.resolve('checkout');
      this.dialogRef.close(true);
    }, ()=> {
      this._loadingService.register('checkout');
    })
  }
}
