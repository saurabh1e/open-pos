import {Component, OnInit} from '@angular/core';

import { TdLoadingService } from '@covalent/core';
import { TdDialogService } from '@covalent/core';

import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Order} from "../../../services/orders.service";
import {timeInterval} from "rxjs/operator/timeInterval";
import {stringify} from "@angular/forms/src/facade/lang";

@Component({
  selector: 'carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartComponent implements OnInit {

  carts: Order[];
  shop_id: number;
  title: string;
  constructor(private _cartService: CartService,
              private _activatedRoute: ActivatedRoute,
              private _indexDB: IndexDBServiceService,
              private _dialogService: TdDialogService,
              private _route: Router,
              private _loadingService: TdLoadingService) {

  }
  openConfirm(id: string): void {
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete this feature? It\'s being used!',
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, Delete',
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {

      } else {
        // DO SOMETHING ELSE
      }
    });
  }
  ngOnInit(): void {
    this.title = 'Pending Orders';
    this._activatedRoute.params.subscribe((params: {id: string}) => {
      if(params.id){
        this.shop_id = parseInt(params.id);
        this._indexDB.carts.where({retail_shop_id: this.shop_id}).toArray().then((data)=>{
          this.carts = data;

        })
      }
    });
  }

  goBack():void {
    window.history.back();
  }


  openCart(id: number): void {
    this._loadingService.register('main');
    console.log(id);
    this._indexDB.carts.get(id).then((cart)=>{
      console.log(cart);
      this._route.navigate(['home/billing/'+stringify(cart.local_id)]).then(()=>{
        this._loadingService.resolve('main');
        });

      });
    }

  deleteCart(cart: Order): void {
  this._cartService.deleteCart(cart).then(()=>{
    this.carts.splice(this.carts.indexOf(cart), 1)
  })

  }

  newCart(): void {
    this._loadingService.register('features.list');
    this._cartService.newCart(this.shop_id).then((cartId)=>{
      this._route.navigate(['home/billing/'+stringify(cartId)]).then(()=>{
        this._loadingService.resolve('features.list');
      });
    });
  }

}
