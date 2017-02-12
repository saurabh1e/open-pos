import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-item-discount',
  templateUrl: 'item-discount.component.html',
  styleUrls: ['item-discount.component.scss']
})
export class ItemDiscountComponent implements OnInit {

  discount: string = '0';
  constructor(public dialogRef: MdDialogRef<ItemDiscountComponent>,) { }

  ngOnInit() {
  }

  close():void {
    this.dialogRef.close({discount: parseInt(this.discount)});
  }

}
