import { Component, OnInit } from '@angular/core';
import {Order} from "../../../services/orders.service";
import {MdDialogRef} from "@angular/material";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Customer, CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  viewProviders: [CustomerService]
})
export class CheckoutComponent implements OnInit {

  cart: Order;
  customer: Customer;
  digitsArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  denominationArray: number[] = [1, 2, 5, 10, 20, 50, 100, 500, 1000, 2000];
  total: string = '0';

  constructor(public dialogRef: MdDialogRef<CheckoutComponent>,
              private _indexDB: IndexDBServiceService) { }

  ngOnInit() {

  }

  close():void {
    this.dialogRef.close({t:true});
  }

}
