import { Component, OnInit } from '@angular/core';
import {TdDialogService} from "@covalent/core";
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-product-info',
  templateUrl: 'product-info.component.html',
  styleUrls: ['product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  constructor(private _dialogService: TdDialogService,public dialogRef: MdDialogRef<ProductInfoComponent>) { }

  ngOnInit() {
  }

  close():void {
    this.dialogRef.close({t:true});
    // this._dialogService.closeAll();
  }

}
