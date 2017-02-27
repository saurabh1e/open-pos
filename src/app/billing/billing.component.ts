import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Product, Tag, Distributor, Brand, Salt, Stock} from "../../services/items.service";
import {RetailShop} from "../../services/shop.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IndexDBServiceService} from "../../services/indexdb.service";
import {Order} from "../../services/orders.service";
import {TdDialogService} from "@covalent/core";
import {ProductInfoComponent} from "./product-info/product-info.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {MdDialogConfig, MdSnackBar} from "@angular/material";
import {CartService} from "../../services/cart.service";
import {ItemDiscountComponent} from "./item-discount/item-discount.component";
import {stringify} from "@angular/core/src/facade/lang";

@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent]

})
export class BillingComponent implements AfterViewInit, OnInit {

  cart: Order;
  searchInputTerm: string;
  filterType: number = 0;
  _brands: Brand[];
  _products: Product[];
  _distributors: Distributor[];
  _tags: Tag[];
  _salts: Salt[];

  selectedTags: Tag[] = [];
  selectedSalts: Salt[] = [];
  selectedBrands: number[] = [];
  selectedDistributors: number[] = [];
  config = <MdDialogConfig>{height: '70%', width: '70%'};


  constructor(
              private _snackBarService: MdSnackBar,
              private _dialogService: TdDialogService,
              private _cartService: CartService,
              private _activatedRoute: ActivatedRoute,
              private _indexDb: IndexDBServiceService,
              private _router: Router) {

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params: {id: string}) => {
      if (params.id) {
        this._indexDb.carts.get(parseInt(params.id)).then((data) => {
          this.cart = data;
          this.setInitialData(this.cart.retail_shop_id);
        })
      }
    });

  }

  ngAfterViewInit(): void {

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

  set salts(data: Tag[]) {
    this._salts = data
  }

  get salts(): Tag[] {
    return this._salts
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

  setInitialData(retail_shop_id: number): void {
    this._indexDb.distributors.where({retail_shop_id: retail_shop_id}).toArray().then((data) => {
      this.distributors = data;
    });

    this._indexDb.tags.where({retail_shop_id: retail_shop_id}).toArray().then((data) => {
      this.tags = data;
    });

    this._indexDb.brands.where({retail_shop_id: retail_shop_id}).toArray().then((data) => {
      this.brands = data;
    });

    this._indexDb.salts.where({retail_shop_id: retail_shop_id}).toArray().then((data) => {
      this.salts = data;
    });


    this._indexDb.products.where({retail_shop_id: retail_shop_id}).toArray().then((data) => {
      this.products = data;

    });

  }

  checkBrand(id: number): boolean {
    return this.selectedBrands.indexOf(id) > -1;

  }

  checkDistributor(id: number): boolean {
    return this.selectedDistributors.indexOf(id) > -1;

  }

  checkTag(tag: Tag): boolean {
    return this.selectedTags.indexOf(tag) > -1;

  }

  checkSalt(salt: Salt): boolean {
    return this.selectedSalts.indexOf(salt) > -1;

  }

  toggleBrand(id: number): void {
    if (this.checkBrand(id)) {
      this.selectedBrands.splice(this.selectedBrands.indexOf(id), 1);
    }
    else {
      this.selectedBrands.push(id)
    }
    this.selectedBrands = this.selectedBrands.concat();
    return
  }

  toggleDistributor(id: number): void {
    if (this.checkDistributor(id)) {
      this.selectedDistributors.splice(this.selectedDistributors.indexOf(id), 1);
    }
    else {
      this.selectedDistributors.push(id)
    }
    this.selectedDistributors = this.selectedDistributors.concat();
    return
  }

  toggleTag(tag: Tag): void {
    if (this.checkTag(tag)) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    }
    else {
      this.selectedTags.push(tag)
    }
    this.selectedTags = this.selectedTags.concat();
    return
  }

  toggleSalt(salt: Salt): void {
    if (this.checkSalt(salt)) {
      this.selectedSalts.splice(this.selectedSalts.indexOf(salt), 1);
    }
    else {
      this.selectedSalts.push(salt)
    }
    this.selectedSalts = this.selectedSalts.concat();
    return
  }


  addProduct(product: Product, stock: Stock, qty?:number): void {
    this._cartService.addProduct(this.cart.local_id, product, stock, qty).then((cart)=>{
      this.cart = cart;
    })
  }
  updateProductQuantity(productId: number, stockId: number, qty?: number): void {
    this._cartService.updateQuantity(this.cart.local_id, productId, stockId, qty).then((cart)=>{
      this.cart = cart;
    })
  }
  removeProduct(productId: number, stockId: number): void {
    this._cartService.removeProduct(this.cart.local_id, productId, stockId).then((cart)=>{
      this.cart = cart;
    })
  }

  showInfo(product: Product): void {

    let _dialog = this._dialogService.open(ProductInfoComponent, this.config);
    _dialog.componentInstance.product = product;
    _dialog.afterClosed().subscribe((data)=>{
    })
  }
  checkOut(): void {
    let _dialog = this._dialogService.open(CheckoutComponent);
    _dialog.componentInstance.cart = this.cart;
    _dialog.afterClosed().subscribe((data)=>{
      if (data){
        this.showSnackBar(data);
        let shop_id = this.cart.retail_shop_id;
        this._cartService.deleteCart(this.cart.local_id).then(()=>{
          this._router.navigate(['dashboard/carts/'+stringify(shop_id)]);
        });
      }
    })
  }
  discountItem(productId: number, stockId: number, discount?: number){
    let _dialog = this._dialogService.open(ItemDiscountComponent, <MdDialogConfig>{height: '25%', width: '25%'});
    _dialog.componentInstance.discount = stringify(discount);
    _dialog.afterClosed().subscribe((data)=>{
      this._cartService.updateDiscount(this.cart.local_id, productId, stockId, data.discount).then((cart)=>{
        this.cart = cart;
      })
    })
  }
  updateOrderDiscount(discount: number): void{
    this._cartService.updateOrderDiscount(this.cart.local_id, discount).then((cart)=>{
      this.cart = cart;
    })
  }
  showSnackBar(orderId: number): void {
    this._snackBarService.open('Order Placed Successfully ID#' + stringify(orderId), '', { duration: 3000 });
  }
}
