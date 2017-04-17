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

  constructor(public dialogRef: MdDialogRef<StockEditComponent>, private _stockService: StocksService) { }

  ngOnInit() {
  }

  close(stock?: Stock): void {
    this.dialogRef.close(stock);
  }

  saveState(): void {
    this._stockService.update(this.stock.id, this.stock).subscribe((data)=>{
      this.close(this.stock)
    }, ()=>{

    });

  }


}
