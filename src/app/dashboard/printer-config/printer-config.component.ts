import { Component, OnInit } from '@angular/core';
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-printer-config',
  templateUrl: './printer-config.component.html',
  styleUrls: ['./printer-config.component.scss']
})
export class PrinterConfigComponent implements OnInit {

  shops: RetailShop[] = [];
  shop: RetailShop;
  shopsSub: Subscription;
  shopSub: Subscription;

  constructor(private _shopService: RetailShopsService) { }

  ngOnInit() {
    this.shop = this._shopService.shop;
    this.shops = this._shopService.shops;

    this.shopsSub = this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;
    });
    this.shopSub = this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
    });

  }
  ngOnDestroy(){
    this.shopsSub.unsubscribe();
    this.shopSub.unsubscribe();
  }

  save(event): void{


  }

}
