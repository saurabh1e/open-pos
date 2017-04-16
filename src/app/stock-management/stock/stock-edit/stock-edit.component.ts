import { Component, OnInit } from '@angular/core';
import {Stock, StocksService} from "../../../../services/items.service";
import { MdDialogRef } from '@angular/material'


@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss']
})
export class StockEditComponent implements OnInit {

  stock: Stock;

  constructor(public dialogRef: MdDialogRef<StockEditComponent>, private _billService: StocksService) { }

  ngOnInit() {
    this._billService.query({id: this.stock.id, __include: ['stocks', 'purchased_items']}).subscribe((data: {data: Stock[]})=>{
      this.stock = data.data[0];
    })
  }

  close(): void {
    this.dialogRef.close();
  }


}
