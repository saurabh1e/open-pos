import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {Brand, Distributor, ItemsService, Product, ProductSalt, Salt, Stock, Tag} from "../../services/items.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IPageChangeEvent, LoadingMode, LoadingType, TdLoadingService, TdMediaService} from "@covalent/core";
import {IndexDBServiceService} from "../../services/indexdb.service";
import {Item, Order, OrdersService} from "../../services/orders.service";
import {ProductInfoComponent} from "./product-info/product-info.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {MdDialog, MdSnackBar} from "@angular/material";
import {CartService} from "../../services/cart.service";
import {ItemDiscountComponent} from "./item-discount/item-discount.component";
import {Subscription} from "rxjs";


@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BillingComponent implements AfterViewInit, OnInit, OnDestroy {

  cart: Order;
  filterType: number = 0;
  _brands: Brand[];
  _products: Product[] = [];
  _distributors: Distributor[];
  _tags: Tag[];
  _salts: Salt[];
  _db: Subscription;
  selectedTags: Tag[] = [];
  selectedSalts: string[] = [];
  selectedBrands: string[] = [];
  selectedDistributors: string[] = [];
  searchInputTerm: string = null;
  totalProducts: number;
  itemsPerPage: number = 48;
  totalSalts: number;
  saltsPerPage: number = 48;
  totalBrands: number;
  brandsPerPage: number = 48;
  productSalts: ProductSalt[] = [];

  constructor(private _snackBarService: MdSnackBar,
              private _dialogService: MdDialog,
              private _cartService: CartService,
              private _itemService: ItemsService,
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

  ngOnDestroy() {
    this._db.unsubscribe();
  }

  ngAfterViewInit(): void {
    this._activatedRoute.params.subscribe((params: { id: string }) => {
      if (params.id) {
        this._loadingService.register('billing');
        this._indexDb.carts.get((params.id)).then((data) => {
          this.cart = data;
          this.setInitialData(this.cart.retail_shop_id);
          this._loadingService.resolve('billing');
        })
      }
    });
    this.media.registerQuery('xs').subscribe((data: boolean) => {
      if (data) {
        this.itemsPerPage = 12;
        this.saltsPerPage = 6;
        this.brandsPerPage = 6;
        this._cd.markForCheck();
      }
    });
    this.media.registerQuery('sm').subscribe((data: boolean) => {
      if (data) {
        this.itemsPerPage = 24;
        this.saltsPerPage = 12;
        this.brandsPerPage = 12;

        this._cd.markForCheck();
      }
    });
    this.media.registerQuery('md').subscribe((data: boolean) => {
      if (data) {
        this.itemsPerPage = 36;
        this.saltsPerPage = 24;
        this.brandsPerPage = 24;

        this._cd.markForCheck();
      }
    });
    this.media.registerQuery('lg').subscribe((data: boolean) => {
      if (data) {
        this.itemsPerPage = 48;
        this.saltsPerPage = 36;
        this.brandsPerPage = 36;

        this._cd.markForCheck();
      }
    });
    this.media.registerQuery('gt-lg').subscribe((data: boolean) => {
      if (data) {
        this.itemsPerPage = 54;
        this.saltsPerPage = 48;
        this.brandsPerPage = 48;

        this._cd.markForCheck();
      }
    });
    this.media.broadcast();
    this._db = this._indexDb.db$.subscribe(() => {
      this.setInitialData(this.cart.retail_shop_id);
    });
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

  change(event: IPageChangeEvent): void {

    this.getProducts(event.page, event.pageSize);
  }

  async queryProductSalt(salts: string[], products?: ProductSalt[]): Promise<ProductSalt[]> {
    if (salts.length) {
      if (products && products.length) {
        let salt = salts.pop();
        let productSalt = [];
        products.forEach((product) => {
          productSalt.push([salt, product.product_id])
        });
        return await this._indexDb.productSalt.where(['salt_id+product_id']).anyOf(productSalt).toArray().then((products) => {
          if (products.length && salts.length)
            return this.queryProductSalt(salts, products);
          return products
        })
      }
      else {
        return await this._indexDb.productSalt.where('salt_id').equals(salts.pop()).toArray().then((products) => {
          if (products.length && salts.length)
            return this.queryProductSalt(salts, products);
          return products
        })
      }
    }
    return
  }

  async getProducts(page?: number, pageSize?: number) {
    if (!pageSize) {
      pageSize = this.itemsPerPage
    }

    if (!page) {
      page = 1
    }


    await this.queryProductSalt(Object.assign([], this.selectedSalts)).then((productSalt) => {
      console.log(productSalt);
      this.productSalts = productSalt;
    });

    if (this.totalProducts > 10000 && this.searchInputTerm) {
      let params = {
        __retail_shop_id__equal: this.cart.retail_shop_id, __name__contains: this.searchInputTerm || undefined,
        __only: ['id'], __page: page, __limit: pageSize
      };
      if (this.selectedBrands.length) {
        params['__brand_id__in'] = [this.selectedBrands]
      }
      if (this.productSalts && this.productSalts.length) {
        params['__id__in'] = this.productSalts.map((product) => {
          return product.product_id;
        })
      }

      this._itemService.query(params).subscribe((data: { data: Product[], total: number }) => {
        this._indexDb.products.where('id').anyOf(data.data.map((product) => {
          return product.id
        })).toArray().then((data) => {
          this.products = data;
          this._cd.markForCheck();
          return;
        })
      }, (err: ProgressEvent) => {
        if (err.type === 'err') {
          this.getLocalProducts(page, pageSize);
        }
      });
      return
    }
    this.getLocalProducts(page, pageSize);
  }

  async getLocalProducts(page?: number, pageSize?: number) {

    let query: any = this._indexDb.products;
    let products: Product[] = null;

    console.log(this.selectedSalts);
    if (this.selectedSalts.length) {
        await query.where('id').anyOf(this.productSalts.map((product) => {
          return product.product_id
        })).toArray().then((data) => {
          products = data;
          console.log(products);
        })
    }

    if (this.selectedBrands.length) {
      if (products) {
        products = products.filter((product) => {
          return this.selectedBrands.indexOf(product.brand_id) > -1;
        });
      }
      else {
        let brandArr = [];
        this.selectedBrands.forEach((brand_id) => {
          brandArr.push([this.cart.retail_shop_id, brand_id]);
        });
        query = query.where(['retail_shop_id+brand_id']).anyOf(brandArr);

        if (this.searchInputTerm) {

          query = query.filter((product) => {
            return new RegExp(`^${this.searchInputTerm}`, 'gi').test(product.name)
          });
        }
        await query.toArray().then(data => {
          products = data;
        });
      }

    }

    if (this.searchInputTerm) {
      await query.offset((page - 1) * pageSize).limit(pageSize).filter((product) => {
        return new RegExp(`^${this.searchInputTerm}`, 'gi').test(product.name)
      })
        .toArray().then((data) => {
        products = data;
      });
    }

    if (!this.selectedSalts.length && !this.selectedBrands.length && !this.searchInputTerm) {
      await query.offset((page - 1) * pageSize).limit(pageSize).toArray().then(data=>{
        products = data;
      });
    }
    console.log(products);
    this.products = products;
    this._cd.markForCheck();
    return
  }

  searchProducts() {

    if (this.searchInputTerm !== null && this.searchInputTerm !== undefined
      && (this.searchInputTerm.length == 8 || this.searchInputTerm.length == 13) && parseInt(this.searchInputTerm)) {

      let term = this.searchInputTerm;
      this.searchInputTerm = undefined;

      this._indexDb.products.where('barcode').equals(term).first().then((data: Product) => {
        if (data.available_stock > 0) {
          this.addProduct(data, data.available_stocks, data.default_quantity ? data.default_quantity : data.is_loose ? 0.1 : 1)
        }
        this._cd.markForCheck();
      }, () => {
      });
      return

    }
    this.getProducts();
    return
  }

  toggleFilter(value: number): void {

    if (this.filterType === value) {
      this.filterType = 0;
      return
    }

    this.filterType = value;
    return
  }

  clearFilter(value: number) {
    switch (value) {
      case 0:
        this.selectedTags = [].concat();
        break;
      case 1:
        this.selectedBrands = [].concat();
        break;
      case 2:
        this.selectedDistributors = [];
        break;
      case 3:
        this.selectedSalts = [].concat();
        break;
    }
    this._cd.markForCheck();
  }

  setInitialData(retail_shop_id: string): void {
    // this._indexDb.distributors.where({retail_shop_id: retail_shop_id}).toArray().then((data) => {
    //   this.distributors = data;
    // });

    this._indexDb.tags.where({retail_shop_id: retail_shop_id}).toArray().then((data) => {
      this.tags = data;
    });

    this.getBrands();

    this.getSalts();

    this.getProducts();

    this._indexDb.products.where({retail_shop_id: retail_shop_id}).count().then((count) => {
      this.totalProducts = count;
    });
    this._indexDb.salts.where({retail_shop_id: retail_shop_id}).count().then((count) => {
      this.totalSalts = count;
    });
    this._indexDb.brands.where({retail_shop_id: retail_shop_id}).count().then((count) => {
      this.totalBrands = count;
    })

  }

  getSalts (saltName?:string, event?: IPageChangeEvent){
    let page = event? event.page: 2;
    let pageSize = event?event.pageSize : this.brandsPerPage;

    if (saltName) {
      this._indexDb.salts.where('retail_shop_id').equals(this.cart.retail_shop_id).offset((page-1)*pageSize)
        .limit(pageSize).filter(salt=>{
          return new RegExp(`^${saltName}`, 'gi').test(salt.name)
      }).toArray().then(salts=>{
        this.salts = salts;
        this._cd.markForCheck();
      })
    }
    else  {
      this._indexDb.salts.where('retail_shop_id').equals(this.cart.retail_shop_id).offset((page-1)*pageSize)
        .limit(pageSize).toArray().then(salts=>{
        this.salts = salts;
        this._cd.markForCheck();
      })
    }
  }

  getBrands (brandName?:string, event?: IPageChangeEvent){
    let page = event? event.page: 2;
    let pageSize = event?event.pageSize : this.brandsPerPage;
    console.log(brandName, event, page, pageSize);
    if (brandName) {
      this._indexDb.brands.where('retail_shop_id').equals(this.cart.retail_shop_id).offset((page-1)*pageSize)
        .limit(pageSize).filter(salt=>{
        return new RegExp(`^${brandName}`, 'gi').test(salt.name)
      }).toArray().then(brands=>{
        this.brands = brands;
        this._cd.markForCheck();
      })
    }
    else  {
      this._indexDb.brands.where('retail_shop_id').equals(this.cart.retail_shop_id).offset((page-1)*pageSize)
        .limit(pageSize).toArray().then(brands=>{
        this.brands = brands;
        this._cd.markForCheck();
      })
    }
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

  checkSalt(salt: string): boolean {
    return this.selectedSalts.indexOf(salt) > -1;

  }

  toggleBrand(id: string): void {
    if (this.checkBrand(id)) {
      this.selectedBrands.splice(this.selectedBrands.indexOf(id), 1);
    }
    else {
      this.selectedBrands.push(id)
    }
    this.getProducts();
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

  toggleSalt(salt: string): void {
    if (this.checkSalt(salt)) {
      this.selectedSalts.splice(this.selectedSalts.indexOf(salt), 1);
    }
    else {
      this.selectedSalts.push(salt)
    }
    this.getProducts();
    return
  }


  addProduct(product: Product, stocks: Stock[], qty: number): void {
    if (!stocks)
      return;
    let item: Item;
    let stockToAdd = stocks.find((stock) => {
      item = this.cart.items.find((item) => {
        return item.product_id == product.id && item.stock_id == stock.id;
      });
      if (item) {
        return stock.units_purchased - stock.units_sold - item.quantity > 0;
      }
      else {
        return stock.units_purchased - stock.units_sold > 0;
      }
    });
    if (stockToAdd) {
      if (item) {
        qty += item.quantity
      }
      this._cartService.addProduct(this.cart.local_id, product, stockToAdd, qty).then((cart) => {
        this.cart = cart;
        this._cd.markForCheck();
      })
    }

  }

  updateProductQuantity(productId: string, stockId: string, qty?: number): void {

    this._cartService.updateQuantity(this.cart.local_id, productId, stockId, qty).then((cart) => {
      this.cart = cart;
      this._cd.markForCheck();
    })
  }

  removeProduct(productId: string, stockId: string): void {
    this._cartService.removeProduct(this.cart.local_id, productId, stockId).then((cart) => {
      this.cart = cart;
      this._cd.markForCheck();
    })
  }

  showInfo(product: Product): void {

    let _dialog = this._dialogService.open(ProductInfoComponent);
    _dialog.componentInstance.product = product;
    _dialog.afterClosed().subscribe((data) => {
    })
  }

  checkOut(): void {
    let _dialog = this._dialogService.open(CheckoutComponent);
    _dialog.componentInstance.cart = this.cart;
    _dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.showSnackBar(data);
        this._cartService.deleteCart(this.cart.local_id).then(() => {
          this._router.navigate(['dashboard/carts/']);
        });
      }
    })
  }

  discountItem(productId: string, stockId: string, discount?: number) {
    let _dialog = this._dialogService.open(ItemDiscountComponent);
    _dialog.componentInstance.discount = JSON.stringify(discount);
    _dialog.afterClosed().subscribe((data) => {
      this._cartService.updateDiscount(this.cart.local_id, productId, stockId, data.discount).then((cart) => {
        this.cart = cart;
      })
    })
  }

  updateOrderDiscount(discount: number): void {
    this._cartService.updateOrderDiscount(this.cart.local_id, discount).then((cart) => {
      this.cart = cart;
    })
  }

  showSnackBar(orderId: string): void {
    this._snackBarService.open('Order Placed Successfully ID#' + orderId, '', {duration: 3000});
  }

  quickCheckOut(): void {
    this._loadingService.register('billing');
    this.cart.amount_paid = this.cart.total;
    this._orderService.create(this.cart).subscribe((data: { data: Order[] }) => {
      this._cartService.updateStock(this.cart).then((status) => {
        this._loadingService.resolve('billing');
        if (data) {
          this.showSnackBar(JSON.stringify(data.data[0].invoice_number));
          this._cartService.deleteCart(this.cart.local_id).then(() => {
            this._router.navigate(['dashboard/carts/']);
          });
        }
      });

    }, () => {
      this._loadingService.resolve('billing');
    })
  }
}
