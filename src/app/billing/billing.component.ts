import {Component, AfterViewInit, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { Title }     from '@angular/platform-browser';

import {Product, Tax, Tag, Distributor, Brand} from "../../services/items.service";
import {RetailShop} from "../../services/shop.service";

import {Router, ActivatedRoute} from "@angular/router";
import {IndexDBServiceService} from "../../services/indexdb.service";
import {Order} from "../../services/orders.service";

@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BillingComponent implements AfterViewInit, OnInit{

  shop: RetailShop;
  cart: Order;
  searchInputTerm: string;
  filterType: number = 0;
  _brands: Brand[];
  _products: Product[];
  _distributors: Distributor[];
  _tags: Tag[];

  selectedTags: Tag[];
  selectedBrands: number[];
  selectedDistributors: number[];



  constructor(private _titleService: Title,
              private _route: Router,
              private _activatedRoute: ActivatedRoute,
              private _cd: ChangeDetectorRef,private _indexDb: IndexDBServiceService) {



  }
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: {id: string}) => {
      if(params.id){
        this._indexDb.carts.get(parseInt(params.id)).then((data)=>{
          this.cart = data;
          this.setInitialData(this.cart.retail_shop_id);
        })
      }
    });
    this.selectedBrands = [];
    this.selectedDistributors= [];
    this.selectedTags = [];

  }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Products' );

  }

  set distributors(data: Distributor[]) {
    this._distributors = data
  }
  get distributors(): Distributor[] {
    return this._distributors
  }

  set tags(data: Tag[]) {
    this._tags = data
  }
  get tags(): Tag[] {
    return this._tags
  }

  set brands(data: Brand[]) {
    this._brands = data
  }
  get brands(): Brand[] {
    return this._brands
  }


  set products(data: Product[]) {
    this._products = data
  }
  get products(): Product[] {
    return this._products
  }

  toggleFilter(value: number): void {
    if (this.filterType === value) {
      this.filterType = 0;
      return
    }

    this.filterType = value;
    return
  }

  goBack():void {
    window.history.back();
  }

  setInitialData(retail_shop_id: number):void{
    this._indexDb.distributors.where({retail_shop_id: retail_shop_id}).toArray().then((data)=>{
      this.distributors = data;
      this._cd.markForCheck();
    });

    this._indexDb.tags.where({retail_shop_id: retail_shop_id}).toArray().then((data)=>{
      this.tags = data;
      this._cd.markForCheck();
    });

    this._indexDb.brands.where({retail_shop_id: retail_shop_id}).toArray().then((data)=>{
      this.brands = data;
      this._cd.markForCheck();
    });

    this._indexDb.products.where({retail_shop_id: retail_shop_id}).toArray().then((data)=>{
      this.products = data;
      this._cd.markForCheck();

    });



  }

  checkBrand(id: number):boolean {
    return this.selectedBrands.indexOf(id)>-1;

  }
  checkDistributor(id: number):boolean {
    return this.selectedDistributors.indexOf(id)>-1;

  }
  checkTag(tag:Tag):boolean {
    return this.selectedTags.indexOf(tag)>-1;

  }

  toggleBrand(id: number):void {
    if (this.checkBrand(id)) {
      this.selectedBrands.splice(this.selectedBrands.indexOf(id), 1);
    }
    else {
      this.selectedBrands.push(id)
    }
    return
  }
  toggleDistributor(id: number):void {
    if (this.checkDistributor(id)) {
      this.selectedDistributors.splice(this.selectedDistributors.indexOf(id), 1);
    }
    else {
      this.selectedDistributors.push(id)
    }
    return
  }
  toggleTag(tag: Tag):void {
    if (this.checkTag(tag)) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    }
    else {
      this.selectedTags.push(tag)
    }
    return
  }



  addProduct(product: Product): void {
    console.log(product.id)
  }
  showInfo(product: Product): void {
    console.log(product.name)
  }
}
