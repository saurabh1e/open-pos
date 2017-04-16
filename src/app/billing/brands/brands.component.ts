import { Component, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {IPageChangeEvent} from "@covalent/core";

import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Brand} from "../../../services/items.service";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsComponent implements AfterViewInit {


  selectedBrand: string[] = [];
  brands: Brand[] = [];
  brandsPerPage: number;
  shopId: string;
  totalBrands: number = 0;
  term: string;

  constructor(public dialogRef: MdDialogRef<BrandsComponent>,
              private _indexDB: IndexDBServiceService,
              private _cd: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this._indexDB.brands.where('retail_shop_id').equals(this.shopId).count().then((count)=>{
      this.totalBrands = count;
    });
    this.getBrands();
  }

  close():void {
    this.dialogRef.close(this.selectedBrand);
  }
  getBrands (brandName?:string, event?: IPageChangeEvent){
    let page = event? event.page: 1;
    let pageSize = event?event.pageSize : this.brandsPerPage;

    if (brandName) {
      this._indexDB.brands.where('retail_shop_id').equals(this.shopId).offset((page-1)*pageSize)
        .limit(pageSize).filter(salt=>{
        return new RegExp(`^${brandName}`, 'gi').test(salt.name)
      }).toArray().then(brands=>{
        this.brands = brands;
        this._cd.markForCheck();
      })
    }
    else  {
      this._indexDB.brands.where('retail_shop_id').equals(this.shopId).offset((page-1)*pageSize)
        .limit(pageSize).toArray().then(brands=>{
        this.brands = brands;
        this._cd.markForCheck();
      })
    }
  }
  checkBrand(salt: string): boolean {
    return this.selectedBrand.indexOf(salt) > -1;

  }
  toggleBrand(salt: string): void {
    if (this.checkBrand(salt)) {
      this.selectedBrand.splice(this.selectedBrand.indexOf(salt), 1);
    }
    else {
      this.selectedBrand.push(salt)
    }
    return
  }

  clearFilter() {
    this.selectedBrand = [];
    this._cd.markForCheck();
  }

}
