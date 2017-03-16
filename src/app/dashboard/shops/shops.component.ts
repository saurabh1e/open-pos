import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TdLoadingService, LoadingMode, LoadingType} from '@covalent/core';
import {RetailShopsService, RetailShop} from "../../../services/index";
import {Router} from "@angular/router";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {stringify} from "@angular/core/src/facade/lang";



@Component({
  selector: 'shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopComponent implements AfterViewInit {

  items: Object[];
  title: string;
  shops: RetailShop[];
  shop: RetailShop;

  constructor(private _titleService: Title,
              private _shopService: RetailShopsService,
              private _indexDBService: IndexDBServiceService,
              private _loadingService: TdLoadingService,
              private _router: Router) {

    this.shops = this._shopService.shops;
    this.shop = this._shopService.shop;

    this._loadingService.create({
      name: 'shops',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Dashboard');
    this.title  = 'Dashboard';

    this._loadingService.register('shops');
    this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;

    }, (error) => {
      console.log(error)
    });
    this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
    });
    this._loadingService.resolve('shops');
  }

  openShop(data: RetailShop): void {

    this._loadingService.register('shops');
    this._shopService.shop = data;
    this._indexDBService.products.where({retail_shop_id: data.id}).count().then((count)=>{
      if (count< 1) {
        this._shopService.syncData(data.id);
        this._indexDBService.db$.subscribe(() => {
          this._router.navigate(['dashboard/carts/']);
          this._loadingService.resolve('shops');
        }, (error) => {
          console.log(error)
        });

      }
      else  {
        this._shopService.getUpdate(data.id).then(()=>{
          this._router.navigate(['dashboard/carts/']).then(()=>{
            this._loadingService.resolve('shops');
          });
        });

      }

    });
  }
  syncData(data: string): void {
    this._loadingService.register('shops');
    this._shopService.syncData(data);
    this._indexDBService.db$.subscribe(() => {
      this._loadingService.resolve('shops');
    }, (error) => {
      console.log(error)
    });
  }

}
