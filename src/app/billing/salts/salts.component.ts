import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {IPageChangeEvent} from "@covalent/core";

import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Salt} from "../../../services/items.service";

@Component({
  selector: 'app-salts',
  templateUrl: './salts.component.html',
  styleUrls: ['./salts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaltsComponent implements AfterViewInit {

  selectedSalt: string[] = [];
  salts: Salt[] = [];
  saltsPerPage: number;
  shopId: string;
  totalSalts: number = 0;
  term: string;

  constructor(public dialogRef: MdDialogRef<SaltsComponent>,
              private _indexDB: IndexDBServiceService,
              private _cd: ChangeDetectorRef) { }

  ngAfterViewInit() {

    this._indexDB.salts.where('retail_shop_id').equals(this.shopId).count().then((count)=>{
      this.totalSalts = count;
    });
    this.getSalts();

  }

  close():void {
    this.dialogRef.close(this.selectedSalt);
  }
  getSalts (saltName?:string, event?: IPageChangeEvent){
    let page = event? event.page: 1;
    let pageSize = event?event.pageSize : this.saltsPerPage;
    if (saltName) {
      this._indexDB.salts.where('retail_shop_id').equals(this.shopId).offset((page-1)*pageSize)
        .limit(pageSize).filter(salt=>{
        return new RegExp(`^${saltName}`, 'gi').test(salt.name)
      }).toArray().then(salts=>{
        this.salts = salts;
        this._cd.markForCheck();
      })
    }
    else  {
      this._indexDB.salts.where('retail_shop_id').equals(this.shopId).offset((page-1)*pageSize)
        .limit(pageSize).toArray().then(salts=>{
        this.salts = salts;
        this._cd.markForCheck();
      })
    }
  }
  checkSalt(salt: string): boolean {
    return this.selectedSalt.indexOf(salt) > -1;

  }
  toggleSalt(salt: string): void {
    if (this.checkSalt(salt)) {
      this.selectedSalt.splice(this.selectedSalt.indexOf(salt), 1);
    }
    else {
      this.selectedSalt.push(salt)
    }
    return
  }

  clearFilter() {
    this.selectedSalt = [];
    this._cd.markForCheck();
  }


}
