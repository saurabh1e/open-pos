import {Component, OnInit} from '@angular/core';
import {TdLoadingService, LoadingMode, LoadingType} from '@covalent/core';

import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Order} from "../../../services/orders.service";
import {stringify} from "@angular/forms/src/facade/lang";


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartComponent implements OnInit {

  carts: Order[];
  shop_id: number;

  constructor(private _cartService: CartService,
              private _activatedRoute: ActivatedRoute,
              private _indexDB: IndexDBServiceService,
              private _route: Router,
              private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'cart',
      type: LoadingType.Circular,
      mode: LoadingMode.Determinate,
      color: 'accent',
    });

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: {id: string}) => {
      console.log(params);
      if(params.id){
        this.shop_id = parseInt(params.id);
        this._indexDB.carts.where({retail_shop_id: this.shop_id}).toArray().then((data)=>{
          this.carts = data;
        })
      }
      else {
        this._indexDB.carts.toArray().then((data)=>{
          this.carts = data;
        })
      }
    });
  }


  openCart(id: number): void {
    this._loadingService.register('cart');
    this._indexDB.carts.get(id).then((cart)=>{
      this.routeCart(cart.local_id);
      });
    }

  deleteCart(cart: Order): void {
  this._cartService.deleteCart(cart.local_id).then(()=>{
    this.carts.splice(this.carts.indexOf(cart), 1)
  })

  }

  newCart(): void {
    this._loadingService.register('cart');
    this._cartService.newCart(this.shop_id).then((cartId)=>{
      this.routeCart(cartId);
    });
  }

  routeCart(cartId: number): void {
    this._route.navigate(['billing/'+stringify(cartId)]).then(()=>{
    this._loadingService.resolve('cart');

    })
  }

}
