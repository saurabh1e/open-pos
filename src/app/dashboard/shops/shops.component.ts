import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TdLoadingService } from '@covalent/core';
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

  shops: RetailShop[];

  constructor(private _titleService: Title,
              private _shopService: RetailShopsService,
              private _indexDBService: IndexDBServiceService,
              private _loadingService: TdLoadingService,
              private _router: Router) {
    this.shops = this._shopService.shops;
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Dashboard');

    this._loadingService.register('main');
    this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;

    }, (error) => {
      console.log(error)
    });
    this._loadingService.resolve('main');
  }

  openShop(data: RetailShop): void {
    this._loadingService.register('main');
    this._shopService.shop = data;
    this._router.navigate(['home/carts/'+stringify(data.id)]);
    this._loadingService.resolve('main');
  }
  syncData(data: number): void {
    this._loadingService.register('main');
    this._shopService.syncData(data);
    this._indexDBService.db$.subscribe((data) => {
      this._loadingService.resolve('main');
    }, (error) => {
      console.log(error)
    });


  }

}
