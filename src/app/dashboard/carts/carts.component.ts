import {Component, OnInit} from '@angular/core';

import { TdLoadingService } from '@covalent/core';
import { TdDialogService } from '@covalent/core';

import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {IndexDBServiceService} from "../../../services/indexdb.service";
import {Order} from "../../../services/orders.service";
import {timeInterval} from "rxjs/operator/timeInterval";

@Component({
  selector: 'carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartComponent implements OnInit {

  carts: Order[];

  constructor(private _cartService: CartService,
              private _activatedRoute: ActivatedRoute,
              private _indexDB: IndexDBServiceService,
              private _dialogService: TdDialogService,
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
    this._loadingService.register('features.list');
    this._activatedRoute.params.subscribe((params: {id: string}) => {
      if(params.id){
        this._indexDB.carts.where({retail_shop_id: params.id}).toArray().then((data)=>{
          this.carts = data;

          this._loadingService.resolve('features.list');
        })
      }
    });

  }

}
