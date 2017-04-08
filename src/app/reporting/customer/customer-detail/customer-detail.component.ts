import { Component, OnInit } from '@angular/core';
import {Customer, CustomerTransactionsService, CustomerTransaction} from "../../../../services/customer.service";
import {MdDialogRef} from "@angular/material";
import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;
  transaction: CustomerTransaction = <CustomerTransaction>{amount: null};

  constructor(public dialogRef: MdDialogRef<CustomerDetailComponent>,
              private _customerTransactionService: CustomerTransactionsService,
              private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'customer-detail',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });

  }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close(this.customer.amount_due);
  }

  addAmount(): void {
    this.transaction.customer_id = this.customer.id;
    this._loadingService.register('customer-detail');
      this._customerTransactionService.create(this.transaction).subscribe((data: {data: CustomerTransaction[]})=>{
        this.customer.transactions.push(data.data[0]);
        this.customer.amount_due -= data.data[0].amount;
        this._loadingService.resolve('customer-detail');
      }, ()=>{
        this._loadingService.resolve('customer-detail');
      })
  }
}
