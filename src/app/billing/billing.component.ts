import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {ItemsService, Product, ProductSalt, Stock, StocksService} from "../../services/items.service";
import {ActivatedRoute, Router} from "@angular/router";
import {
  IPageChangeEvent,
  LoadingMode,
  LoadingType,
  TdDialogService,
  TdLoadingService,
  TdMediaService
} from "@covalent/core";
import {Observable} from "rxjs/Observable";

import {IndexDBServiceService} from "../../services/indexdb.service";
import {Item, Order, OrdersService} from "../../services/orders.service";
import {ProductInfoComponent} from "./product-info/product-info.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {MdDialog, MdSnackBar} from "@angular/material";
import {CartService} from "../../services/cart.service";
import {ItemDiscountComponent} from "./item-discount/item-discount.component";
import {SaltsComponent} from "./salts/salts.component";
import {BrandsComponent} from "./brands/brands.component";
import {ProductFormComponent} from "../inventory/product/product-form/product-form.component";
import {StockEditComponent} from "../stock-management/stock/stock-edit/stock-edit.component";
import {RetailShop, RetailShopsService} from "../../services/shop.service";


@Component({
  selector: 'billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
  entryComponents: [ProductInfoComponent, CheckoutComponent, ItemDiscountComponent, ProductFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BillingComponent implements AfterViewInit, OnInit {

  cart: Order;

  _products: Product[] = [];
  selectedSalts: string[] = [];
  selectedBrands: string[] = [];
  searchInputTerm: string = null;
  totalProducts: number;
  itemsPerPage: number = 48;
  saltsPerPage: number = 48;
  brandsPerPage: number = 48;
  productSalts: ProductSalt[] = [];
  shop: RetailShop;

  constructor(private _snackBarService: MdSnackBar,
              private _dialogService: MdDialog,
              private _cartService: CartService,
              private _itemService: ItemsService,
              private _orderService: OrdersService,
              private _retailService: RetailShopsService,
              private _cd: ChangeDetectorRef,
              private _tdDialogService: TdDialogService,
              private _activatedRoute: ActivatedRoute,
              private _loadingService: TdLoadingService,
              private _stockService: StocksService,
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
    this._loadingService.register('billing');
    this._activatedRoute.params.subscribe((params: { id: string }) => {
      if (params.id) {
        this._indexDb.carts.get(parseInt(params.id)).then((data) => {
          this.cart = data;
          this._indexDb.shops.where('id').equals(this.cart.retail_shop_id).first().then((data) => {
            this.shop = data;
            this._retailService.shop = this.shop;
          });
          this.getProducts();
          this._indexDb.products.where('retail_shop_id').equals(this.cart.retail_shop_id).count().then((count) => {
            this.totalProducts = count;
          });
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

    if (this.selectedSalts.length) {
      await query.where('id').anyOf(this.productSalts.map((product) => {
        return product.product_id
      })).toArray().then((data) => {
        products = data;
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
      await query.offset((page - 1) * pageSize).limit(pageSize).toArray().then(data => {
        products = data;
      });
    }
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

  async updateProduct(product: Product, stockId: string) {
    return await this.editProduct(product).subscribe((editedProduct: Product) => {
      this.getStock(stockId).subscribe((data: { data: Stock[] }) => {
        this.editStock(data.data[0]).subscribe((stock) => {
          if (editedProduct) {
            product = editedProduct;
          }
          if (stock) {
            product.available_stocks[0] = stock;
          }
          if (editedProduct || stock) {
            return this._indexDb.products.update(product.id, product).then(d => {
              return true
            })
          }
          else {
            return false
          }
        })
      })


    });
  }

  addProduct(product: Product, stocks: Stock[], qty: number): void {
    if (!stocks)
      return;
    if (stocks.length === 1 && stocks[0].default_stock) {
      this.updateProduct(product, stocks[0].id).then(() => {
        this.addToCart(product, product.available_stocks, qty)
      })
    }
    else {
      this.addToCart(product, stocks, qty)
    }
  }

  addToCart(product: Product, stocks: Stock[], qty: number): void {
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

  filterSalts(): void {
    let _dialog = this._dialogService.open(SaltsComponent, {
      height: '50%',
      width: '70%',
    });
    _dialog.componentInstance.shopId = this.cart.retail_shop_id;
    _dialog.componentInstance.saltsPerPage = this.saltsPerPage;
    _dialog.componentInstance.selectedSalt = this.selectedSalts;

    _dialog.afterClosed().subscribe((data: string[]) => {
      if (data) {
        this.selectedSalts = data;
        this.getProducts();
      }
    })
  }

  filterBrands(): void {
    let _dialog = this._dialogService.open(BrandsComponent, {
      height: '400px',
      width: '600px',
    });
    _dialog.componentInstance.shopId = this.cart.retail_shop_id;
    _dialog.componentInstance.brandsPerPage = this.saltsPerPage;
    _dialog.componentInstance.selectedBrand = this.selectedBrands;

    _dialog.afterClosed().subscribe((data: string[]) => {
      if (data) {
        this.selectedBrands = data;
        this.getProducts();
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


  editProduct(product: Product): Observable<Product> {
    product.retail_shop = this.shop;
    let _dialog = this._tdDialogService.open(ProductFormComponent);
    _dialog.componentInstance.product = Object.assign({}, product);
    return _dialog.afterClosed()
  };

  editStock(stock): Observable<Stock> {
    let _dialog = this._tdDialogService.open(StockEditComponent);
    _dialog.componentInstance.stock = Object.assign({}, stock);
    return _dialog.afterClosed()

  }

  getStock(stockId): Observable<{ data: Stock[] }> {
    return this._stockService.query({
      __id__equal: stockId, __include: ['product', 'distributor_bill']
    })
  }
}
