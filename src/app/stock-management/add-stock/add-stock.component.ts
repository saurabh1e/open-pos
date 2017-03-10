import { Component, OnInit } from '@angular/core';
import {StepState} from "@covalent/core";
import {RetailShopsService, RetailShop} from "../../../services/shop.service";
import {Observable} from "rxjs";
import {DistributorService, ItemsService, Product} from "../../../services/items.service";

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  stateStep1: StepState = StepState.Required;
  stateStep2: StepState = StepState.Required;
  stateStep3: StepState = StepState.Required;
  disabled: boolean = false;
  shop: RetailShop;
  shops: RetailShop[];
  state: number = 1;
  entryType: string;
  products: Product[];

  constructor(private _shopService: RetailShopsService,
              private _itemService: ItemsService,
              private _distributorService: DistributorService) {

  }

  ngOnInit() {
    this.shop = this._shopService.shop;
    this.shops = this._shopService.shops;
    if (this.shop.id) {
      this.setShop(this.shop);
    }
    this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;
    });
    this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
      this.setShop(this.shop);
    });
  }


  setEntryType(event){
    this.entryType = event;
    this.state = 3;
    this.stateStep2 = StepState.Complete;
  }

  setShop(data: RetailShop) {
    this.shop = data;
    this.stateStep1 = StepState.Complete;
    this.state = 2;

  }

  getDistributors = (event): Observable<string[]> => {
    return this._distributorService.query({
      __retail_shop_id__equal: this.shop.id, __limit: 50
      , __name__contains: event
    }).map(data => data.data)
  };

  removeDistributor(): void {
    this.products = []
  }

  addDistributor(event:{display: string, value: number}): void {
    this._itemService.query({__retail_shop_id__equal: this.shop.id, __distributor_id__equal: event.value,
      __only:['id', 'name']})
      .subscribe((data: {data: Product[]})=>{
        this.products = data.data;
    })
  }
}
