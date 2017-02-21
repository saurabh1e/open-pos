import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TdLoadingService, LoadingMode, LoadingType} from '@covalent/core';
import {RetailShopsService, RetailShop} from "../../../services/index";
import {Router} from "@angular/router";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {stringify} from "@angular/common/src/facade/lang";


@Component({
  selector: 'shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopComponent implements AfterViewInit {

  items: Object[];
  users: Object[];
  title: string;
  shops: RetailShop[];
  shop_id: number;

  constructor(private _titleService: Title,
              private _shopService: RetailShopsService,
              private _indexDBService: IndexDBServiceService,
              private _loadingService: TdLoadingService,
              private _router: Router) {
    this.shops = this._shopService.shops;

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
    this._loadingService.resolve('shops');
  }

  openShop(data: RetailShop): void {
    this._loadingService.register('shops');
    this._shopService.shop = data;
    this._indexDBService.products.where({retail_shop_id: data.id}).count().then((count)=>{
      if (count< 1) {
        this._shopService.syncData(data.id);
        this._indexDBService.db$.subscribe(() => {
          this.shop_id = data.id;
          this._loadingService.resolve('shops');
        }, (error) => {
          console.log(error)
        });

      }
      else  {
        this.shop_id = data.id;
        this._loadingService.resolve('shops');
      }

    });

  }
  syncData(data: number): void {
    this._loadingService.register('shops');
    this._shopService.syncData(data);
    this._indexDBService.db$.subscribe(() => {
      this._loadingService.resolve('shops');
    }, (error) => {
      console.log(error)
    });
  }

  closeCart(): void {
    this.shop_id = null;
  }

}
