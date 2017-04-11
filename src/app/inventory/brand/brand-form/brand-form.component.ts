import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Brand, BrandsService, Distributor, DistributorService, ItemsService} from "../../../../services/items.service";
import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";
import {RetailShopsService, RetailShop} from "../../../../services/shop.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.scss']
})
export class BrandFormComponent implements OnInit {

  brand: Brand;
  brandCopy: Brand;
  shops: RetailShop[];
  distributors: Distributor[];

  constructor(public dialogRef: MdDialogRef<BrandFormComponent>,
              private _loadingService: TdLoadingService,
              private _distributorService: DistributorService,
              private _shopService: RetailShopsService,
              private _brandService: BrandsService) {
    this._loadingService.create({
      name: 'brand-form',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    }); }

  ngOnInit() {
    this.shops = this._shopService.shops;
    this._shopService.shops$.subscribe((data) => {
      this.shops = data;
    });
    this.brandCopy = Object.assign({}, this.brand);
  }
  cancelState(): void {
    this.brand = Object.assign({}, this.brandCopy);
  }

  saveState(): void {
    this._loadingService.register('brand-form');
    this.brand.retail_shop_id = this.brand.retail_shop.id;
    if (this.brand.id) {
      this._brandService.update(this.brand.id, this.brand).subscribe(() => {
        this.dialogRef.close(this.brand);
        this._loadingService.resolve('brand-form');
      }, ()=>{
        this._loadingService.resolve('brand-form');
      })
    }
    else {
      this._brandService.create(this.brand).subscribe(() => {
        this.dialogRef.close(this.brand);
        this._loadingService.resolve('brand-form');
      }, ()=>{
        this._loadingService.resolve('brand-form');
      })
    }
  }

  close():void {
    this.dialogRef.close();
  }

  getDistributors = (event): Observable<string[]> => {
    return this._distributorService.query({
      __retail_shop_id__equal: this.brand.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data)

  };

  addDistributor(event: Distributor): void {
    this._brandService.updateDistributor(this.brand.id, event.id, 'add').subscribe(()=>{
      this.brand.distributors.push(event);
    }, ()=>{
      this.distributors.splice(this.distributors.indexOf(event), 1)
    })

  }

  removeDistributor(event : Distributor): void {
    this._brandService.updateDistributor(this.brand.id, event.id, 'remove').subscribe(_=>{
      this.brand.distributors.splice(this.brand.distributors.findIndex((value)=>{
        return value.id == event.id
      }), 1)
    },()=>{

      this.distributors.push(event);
    });
    return
  }

}
