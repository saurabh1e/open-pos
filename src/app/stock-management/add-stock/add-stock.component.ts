import { Component, OnInit } from '@angular/core';
import {StepState, TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";
import {RetailShopsService, RetailShop} from "../../../services/shop.service";
import {Observable} from "rxjs";
import {
  DistributorService, ItemsService, Product, Stock, DistributorBill,
  DistributorBillsService, StocksService, Distributor
} from "../../../services/items.service";
import {MdSnackBar} from "@angular/material";

export interface StockAdd extends Stock {
  add?: boolean;
}

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss'],
  viewProviders:[DistributorBillsService, StocksService]
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
  stocks: StockAdd[];
  bill: DistributorBill = <DistributorBill>{};
  distributors:any[]=[];
  products:any[]=[];

  constructor(private _shopService: RetailShopsService,
              private _itemService: ItemsService,
              private _snackBarService: MdSnackBar,
              private _loadingService: TdLoadingService,
              private _distributorService: DistributorService,
              private _stockService: StocksService,
              private _distributorBillService: DistributorBillsService) {
    this._loadingService.create({
      name: 'distributor-bill',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });

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
    this.stocks = [];

  }

  setShop(data: RetailShop) {
    this.shop = data;
    this.stateStep1 = StepState.Complete;
    this.state = 2;

  }

  getDistributors = (event): Observable<string[]> => {
    return this._distributorService.query({
      __retail_shop_id__equal: this.shop.id, __only:['id', 'name', 'retail_shop_id']
      , __name__contains: event
    }).map(data => data.data)
  };

  getProducts = (event): Observable<string[]> => {
    return this._itemService.query({
      __retail_shop_id__equal: this.shop.id, __only:['id', 'name', 'retail_shop_id']
      , __name__contains: event
    }).map(data => data.data)
  };


  removeDistributor(): void {
    this.stocks = []
  }

  removeProduct(): void {
    this.stocks = []
  }


  addDistributor(event:{display: string, value: number}): void {
    this._loadingService.register('distributor-bill');
    this._distributorService.query({__retail_shop_id__equal: this.shop.id, __id__equal: event.value,
      __only:['products'],
      __include:['products']})
      .subscribe((data: {data: Distributor[]})=>{
        this.stocks = data.data[0].products.map((data)=>{
          let stock: Stock = <Stock>{product: data, purchase_amount: data.last_purchase_amount,
            selling_amount: data.last_selling_amount, units_purchased: data.stock_required,
            product_id: data.id, quantity_label: data.quantity_label};
          stock.product = data;
          return stock;

        });
        this._loadingService.resolve('distributor-bill');
    }, ()=>{
        this._loadingService.resolve('distributor-bill');
      })
  }

  addProduct(event:{display: string, value: number}): void {
    this._loadingService.register('distributor-bill');
    this._itemService.query({__retail_shop_id__equal: this.shop.id, __id__equal: event.value,
      __only:['id', 'name', 'last_selling_amount', 'last_purchase_amount', 'stock_required', 'quantity_label'],
      __include:['last_selling_amount', 'last_purchase_amount', 'stock_required']})
      .subscribe((data: {data: Product[]})=>{
        this.stocks = data.data.map((data)=>{
          let stock: StockAdd = <StockAdd>{product: data, purchase_amount: data.last_purchase_amount,
            selling_amount: data.last_selling_amount, units_purchased: data.stock_required,
            product_id: data.id, quantity_label: data.quantity_label, add: false};
          stock.product = data;
          return stock;

        });
        this._loadingService.resolve('distributor-bill');
      }, ()=>{
        this._loadingService.resolve('distributor-bill');
      })
  }

  saveBill():void {
    this._loadingService.register('distributor-bill');
    this.bill.distributor_id = this.distributors[0].value;
    this.bill.purchased_items = this.stocks.filter((data)=>{
      delete data.product;
      return data.add;
    });
    this._distributorBillService.create(this.bill).subscribe((data: {data: DistributorBill[]})=>{
      this.stateStep3 = StepState.Complete;
      this._shopService.getProductUpdate(this.shop.id, null, {__id__in: this.stocks.map((data)=>{
        return data.product_id;
      })}).then(()=>{
        this.stocks = [];
        this.distributors = [];
        this.entryType = null;
        this._snackBarService.open('Stock updated with bill ID#' + JSON.stringify(data.data[0].id), '', { duration: 3000 });
        this._loadingService.resolve('distributor-bill');
      });

    }, ()=>{
      this._loadingService.resolve('distributor-bill');
    })
  }


  saveProductStock(): void {

    this._stockService.create(this.stocks[0]).subscribe((data: {data: Stock[]})=>{
      this._shopService.getProductUpdate(this.shop.id, null, {__id__in: [this.stocks[0].product_id]}).then(()=>{
        this.stocks = [];
        this.distributors = [];
        this.products = [];
        this._snackBarService.open('Stock updated with ID#' + JSON.stringify(data.data[0].id), '', { duration: 3000 });
        this._loadingService.resolve('distributor-bill');
      });
    }, ()=>{
      this._loadingService.resolve('distributor-bill');
    })
  }

}
