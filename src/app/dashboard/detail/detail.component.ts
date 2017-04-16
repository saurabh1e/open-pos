import { Component, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {



  shop: RetailShop;
  shopSub: Subscription;

  constructor(private _shopService: RetailShopsService,
              private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.shop = this._shopService.shop;

    this.shopSub = this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
    });

    if (!this.shop.id) {
      this._dialogService.openAlert({
        message: 'Select a Shop to edit Registration Details.',
        disableClose: false , // defaults to false
        viewContainerRef: this._viewContainerRef, //OPTIONAL
        title: 'Alert', //OPTIONAL, hides if not provided
        closeButton: 'Close', //OPTIONAL, defaults to 'CLOSE'
      });
    }
  }
  ngOnDestroy(){
    this.shopSub.unsubscribe();
  }

  save(event): void{


  }
}
