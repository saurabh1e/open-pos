import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Tax, TaxsService} from "../../../../services/items.service";
import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";
import {RetailShopsService, RetailShop} from "../../../../services/shop.service";

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.scss']
})
export class TaxFormComponent implements OnInit {

  tax: Tax;
  taxCopy: Tax;
  shops: RetailShop[];

  constructor(public dialogRef: MdDialogRef<TaxFormComponent>,
              private _loadingService: TdLoadingService,
              private _shopService: RetailShopsService,
              private _taxService: TaxsService) {
    this._loadingService.create({
      name: 'tax-form',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    }); }

  ngOnInit() {
    this.shops = this._shopService.shops;
    this._shopService.shops$.subscribe((data) => {
      this.shops = data;
    });
    this.taxCopy = Object.assign({}, this.tax);
  }
  cancelState(): void {
    this.tax = Object.assign({}, this.taxCopy);
  }

  saveState(): void {
    this._loadingService.register('tax-form');
    this.tax.retail_shop_id = this.tax.retail_shop.id;
    if (this.tax.id) {
      this._taxService.update(this.tax.id, this.tax).subscribe(() => {
        this.dialogRef.close(this.tax);
        this._loadingService.resolve('tax-form');
      }, ()=>{
        this._loadingService.resolve('tax-form');
      })
    }
    else {
      this._taxService.create(this.tax).subscribe(() => {
        this.dialogRef.close(this.tax);
        this._loadingService.resolve('tax-form');
      }, ()=>{
        this._loadingService.resolve('tax-form');
      })
    }
  }

  close():void {
    this.dialogRef.close();
  }
}
