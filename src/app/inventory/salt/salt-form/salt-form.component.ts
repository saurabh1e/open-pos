import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Salt, SaltsService} from "../../../../services/items.service";
import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";
import {RetailShopsService, RetailShop} from "../../../../services/shop.service";

@Component({
  selector: 'app-salt-form',
  templateUrl: './salt-form.component.html',
  styleUrls: ['./salt-form.component.scss']
})
export class SaltFormComponent implements OnInit {

  salt: Salt;
  saltCopy: Salt;
  shops: RetailShop[];

  constructor(public dialogRef: MdDialogRef<SaltFormComponent>,
              private _loadingService: TdLoadingService,
              private _shopService: RetailShopsService,
              private _saltService: SaltsService) {
    this._loadingService.create({
      name: 'salt-form',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    }); }

  ngOnInit() {
    this.shops = this._shopService.shops;
    this._shopService.shops$.subscribe((data) => {
      this.shops = data;
    });
    this.saltCopy = Object.assign({}, this.salt);
  }
  cancelState(): void {
    this.salt = Object.assign({}, this.saltCopy);
  }

  saveState(): void {
    this._loadingService.register('salt-form');
    this.salt.retail_shop_id = this.salt.retail_shop.id;
    if (this.salt.id) {
      this._saltService.update(this.salt.id, this.salt).subscribe(() => {
        this.dialogRef.close(this.salt);
        this._loadingService.resolve('salt-form');
      }, ()=>{
        this._loadingService.resolve('salt-form');
      })
    }
    else {
      this._saltService.create(this.salt).subscribe(() => {
        this.dialogRef.close(this.salt);
        this._loadingService.resolve('salt-form');
      }, ()=>{
        this._loadingService.resolve('salt-form');
      })
    }
  }

  close():void {
    this.dialogRef.close();
  }
}
