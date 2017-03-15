import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";
import {RetailShopsService, RetailShop} from "../../../../services/shop.service";
import {DistributorService, Distributor} from "../../../../services/items.service";

@Component({
  selector: 'app-distributor-form',
  templateUrl: './distributor-form.component.html',
  styleUrls: ['./distributor-form.component.scss']
})
export class DistributorFormComponent implements OnInit {

  distributor: Distributor;
  distributorCopy: Distributor;
  shops: RetailShop[];

  constructor(public dialogRef: MdDialogRef<DistributorFormComponent>,
              private _loadingService: TdLoadingService,
              private _shopService: RetailShopsService,
              private _distributorService: DistributorService) {
    this._loadingService.create({
      name: 'distributor-form',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    }); }

  ngOnInit() {
    this.shops = this._shopService.shops;
    this._shopService.shops$.subscribe((data) => {
      this.shops = data;
    });
    if (!this.distributor.emails) {
      this.distributor.emails = [];
    }
    if (!this.distributor.phone_numbers) {
      this.distributor.phone_numbers = [];
    }
    this.distributorCopy = Object.assign({}, this.distributor);
  }
  cancelState(): void {
    this.distributor = Object.assign({}, this.distributorCopy);
  }

  saveState(): void {
    this._loadingService.register('distributor-form');
    this.distributor.retail_shop_id = this.distributor.retail_shop.id;
    if (this.distributor.id) {
      this._distributorService.update(this.distributor.id, this.distributor).subscribe(() => {
        this.dialogRef.close(this.distributor);
        this._loadingService.resolve('distributor-form');
      }, ()=>{
        this._loadingService.resolve('distributor-form');
      })
    }
    else {
      this._distributorService.create(this.distributor).subscribe(() => {
        this.dialogRef.close(this.distributor);
        this._loadingService.resolve('distributor-form');
      }, ()=>{
        this._loadingService.resolve('distributor-form');
      })
    }
  }

  close():void {
    this.dialogRef.close();
  }
}
