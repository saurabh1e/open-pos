import { Component, OnInit } from '@angular/core';
import {Order} from "../../../services/orders.service";
import {MdDialogRef} from "@angular/material";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Customer, CustomerService} from "../../../services/customer.service";
import {RetailShop} from "../../../services/shop.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  viewProviders: [CustomerService]
})
export class CheckoutComponent implements OnInit {

  cart: Order;
  shop: RetailShop;
  customer: Customer;
  digitsArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  denominationArray: {} = {1:0, 2:0, 5:0, 10:0, 20:0, 50:0, 100:0, 500:0, 1000:0, 2000:0};
  total: string = '0';

  constructor(public dialogRef: MdDialogRef<CheckoutComponent>,
              private _indexDB: IndexDBServiceService) { }

  ngOnInit() {
    this._indexDB.shops.get(this.cart.retail_shop_id).then((shop)=>{
      this.shop = shop;
    })
  }

  close():void {
    this.dialogRef.close({t:true});
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
}
