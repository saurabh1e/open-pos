import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material'

import {DistributorBill, DistributorBillsService} from "../../../../services/items.service";

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss']
})
export class BillDetailsComponent implements OnInit {

  bill: DistributorBill;

  constructor(public dialogRef: MdDialogRef<BillDetailsComponent>, private _billService: DistributorBillsService) { }

  ngOnInit() {
    this._billService.query({id: this.bill.id, __include: ['stocks', 'purchased_items']}).subscribe((data: {data: DistributorBill[]})=>{
      this.bill = data.data[0];
    })
  }

  close(): void {
    this.dialogRef.close();
  }


}
