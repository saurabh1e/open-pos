import {Component, AfterViewInit, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from "@angular/core";
import {Product, Tag, Distributor, Brand, Salt, Stock} from "../../services/items.service";
import {RetailShop} from "../../services/shop.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IndexDBServiceService} from "../../services/indexdb.service";
import {Order, OrdersService} from "../../services/orders.service";
import {TdDialogService, TdLoadingService, LoadingType, LoadingMode, TdMediaService} from "@covalent/core";
import {ProductInfoComponent} from "./product-info/product-info.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {MdDialogConfig, MdSnackBar} from "@angular/material";
import {CartService} from "../../services/cart.service";
import {ItemDiscountComponent} from "./item-discount/item-discount.component";
import {stringify} from "@angular/core/src/facade/lang";
import {async} from "@angular/core/testing";

@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent],
  changeDetection: ChangeDetectionStrategy.OnPush

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
  selectedBrands: string[] = [];
  selectedDistributors: string[] = [];
  config = <MdDialogConfig>{height: '70%', width: '70%'};
  itemsPerPage: number = 48;


  constructor(
              private _snackBarService: MdSnackBar,
              private _dialogService: TdDialogService,
              private _cartService: CartService,
              private _orderService: OrdersService,
              private _cd: ChangeDetectorRef,
              private _activatedRoute: ActivatedRoute,
              private _loadingService: TdLoadingService,
              private _indexDb: IndexDBServiceService,
              public media: TdMediaService,
              private _router: Router) {
    this._loadingService.create({
      name: 'billing',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    this._activatedRoute.params.subscribe((params: {id: string}) => {
      if (params.id) {
        this._loadingService.register('billing');
        this._indexDb.carts.get((params.id)).then((data) => {
          this.cart = data;
          this.setInitialData(this.cart.retail_shop_id);
          this._loadingService.resolve('billing');
        })
      }
    });
    this.media.registerQuery('xs').subscribe((data: boolean)=>{
      if (data) {
        console.log(data);
        this.itemsPerPage = 12;
        this._cd.markForCheck();
      }
    });
    this.media.registerQuery('sm').subscribe((data: boolean)=>{
      if (data) {
        console.log(data);
        this.itemsPerPage = 24;
        this._cd.markForCheck();
      }
    });
    this.media.registerQuery('md').subscribe((data: boolean)=>{
      if (data) {
        console.log(data);
        this.itemsPerPage = 36;
        this._cd.markForCheck();
      }
    });
    this.media.registerQuery('lg').subscribe((data: boolean)=>{
      if (data) {
        console.log(data);
        this.itemsPerPage = 48;
        this._cd.markForCheck();
      }
    });
    this.media.registerQuery('gt-lg').subscribe((data: boolean)=>{
      if (data) {
        console.log(data);
        this.itemsPerPage = 54;
        this._cd.markForCheck();
      }
    });
    this.media.broadcast();
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
  clearFilter (value: number) {
    switch (value) {
      case 0: this.selectedTags = [].concat();break;
      case 1: this.selectedBrands = [].concat();break;
      case 2: this.selectedDistributors = [];break;
      case 3: this.selectedSalts = [].concat();break;
    }
    this._cd.markForCheck();
  }

  setInitialData(retail_shop_id: string): void {
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
      this._cd.markForCheck();

    });

  }

  checkBrand(id: string): boolean {
    return this.selectedBrands.indexOf(id) > -1;

  }

  checkDistributor(id: string): boolean {
    return this.selectedDistributors.indexOf(id) > -1;

  }

  checkTag(tag: Tag): boolean {
    return this.selectedTags.indexOf(tag) > -1;

  }

  checkSalt(salt: Salt): boolean {
    return this.selectedSalts.indexOf(salt) > -1;

  }

  toggleBrand(id: string): void {
    if (this.checkBrand(id)) {
      this.selectedBrands.splice(this.selectedBrands.indexOf(id), 1);
    }
    else {
      this.selectedBrands.push(id)
    }
    this.selectedBrands = this.selectedBrands.concat();
    return
  }

  toggleDistributor(id: string): void {
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
    if (!stock)
        return;
    this._cartService.addProduct(this.cart.local_id, product, stock, qty).then((cart)=>{
      this.cart = cart;
      this._cd.markForCheck();
    })
  }
  updateProductQuantity(productId: string, stockId: string, qty?: number): void {
    console.log(qty);
    this._cartService.updateQuantity(this.cart.local_id, productId, stockId, qty).then((cart)=>{
      this.cart = cart;
      console.log(cart);
      this._cd.markForCheck();
    })
  }
  removeProduct(productId: string, stockId: string): void {
    this._cartService.removeProduct(this.cart.local_id, productId, stockId).then((cart)=>{
      this.cart = cart;
      this._cd.markForCheck();
    })
  }

  showInfo(product: Product): void {

    let _dialog = this._dialogService.open(ProductInfoComponent, this.config);
    _dialog.componentInstance.product = product;
    _dialog.afterClosed().subscribe((data)=>{
    })
  }
  checkOut(): void {
    let _dialog = this._dialogService.open(CheckoutComponent,  <MdDialogConfig>{ width: '80%'});
    _dialog.componentInstance.cart = this.cart;
    _dialog.afterClosed().subscribe((data)=>{
      if (data){
        this.showSnackBar(data);
        this._cartService.deleteCart(this.cart.local_id).then(()=>{
          this._router.navigate(['dashboard/carts/']);
        });
      }
    })
  }
  discountItem(productId: string, stockId: string, discount?: number){
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
  showSnackBar(orderId: string): void {
    this._snackBarService.open('Order Placed Successfully ID#' + orderId, '', { duration: 3000 });
  }
  quickCheckOut(): void {
    this._loadingService.register('billing');
    this.cart.amount_paid = this.cart.total;
    this._orderService.create(this.cart).subscribe((data: {data: Order[]}) => {
      this._cartService.updateStock(this.cart).then((status)=>{
        this._loadingService.resolve('billing');
        if (data){
          this.showSnackBar(stringify(data.data[0].invoice_number));
          this._cartService.deleteCart(this.cart.local_id).then(()=>{
            this._router.navigate(['dashboard/carts/']);
          });
        }
      });

    }, () => {
      this._loadingService.resolve('billing');
    })
  }
}
