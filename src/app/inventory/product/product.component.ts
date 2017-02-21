import {Component, AfterViewInit} from "@angular/core";
import {
  TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode, IPageChangeEvent,
  TdDialogService
} from "@covalent/core";
import {Product, ItemsService, Brand, Distributor} from "../../../services/items.service";
import {UsersService} from "../../../services/users.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import {RetailShopsService, RetailShop} from "../../../services/shop.service";
import {ProductFormComponent} from "./product-form/product-form.component";
import {MdDialogConfig} from "@angular/material";


@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'],
  entryComponents: [ProductFormComponent]
})

export class ProductComponent implements AfterViewInit {

  data: Product[] = [];

  columns: TdDataTableColumn[] = [
    {name: 'id', label: 'id', sortable: true},
    {name: 'name', label: 'Product Name', sortable: true, editable: true},
    {name: 'brand.name', label: 'Brand', sortable: false, nested: true},
    {name: 'distributor.name', label: 'Distributor', sortable: false, nested: true},
    {name: 'mrp', label: 'Price (INR)', numeric: true, format: v => v.toFixed(2), sortable: false},
    {
      name: 'auto_discount',
      label: 'Discount',
      numeric: true,
      format: v => v.toFixed(2),
      sortable: false,
      editable: true
    },
    {name: 'retail_shop.name', label: 'Shop', sortable: false},
    {name: 'available_stock', label: 'Stock', numeric: true, sortable: false},
    {name: 'min_stock', label: 'min qty', numeric: true, sortable: true},
  ];

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;
  shops: RetailShop[];
  title: string;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'id';
  edit: boolean = false;
  product: Product;

  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _titleService: Title,
              private _loadingService: TdLoadingService,
              private _itemService: ItemsService,
              private _shopService: RetailShopsService,
              private _dialogService: TdDialogService,
              private _userService: UsersService) {
    this._loadingService.create({
      name: 'products',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Product');
    this.title = 'Products';
    if (this._userService.user) {
      this.shops = this._shopService.shops;
    }
    this._shopService.shops$.subscribe((data) => {
      this.shops = data;
    });

  }

  sort(name: string, sortOrder: TdDataTableSortingOrder): void {
    console.log(sortOrder, name);
    this.sortBy = name;
    if (sortOrder.toString() == 'ASC') {
      this.sortOrder = TdDataTableSortingOrder.Descending
    }
    else {
      this.sortOrder = TdDataTableSortingOrder.Ascending
    }
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    this._loadingService.register('products');
    let sortBy = this.sortBy;
    if (this.sortOrder.toString() == 'DESC') {
      sortBy = '-'.concat(sortBy);
    }
    this._itemService.query({
      __retail_shop_id__in: this.shops.map(item => item.id), __include: ['brand', 'distributor', 'retail_shop'],
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy
    })
      .subscribe((resp: {data: Product[], total: number}) => {
        this.data = resp.data;
        this.filteredData = resp.data;
        this.filteredTotal = resp.total;
        this._loadingService.resolve('products');
      });
  }

  addProduct(): void {
    let product = <Product>{
      brand: {}, distributor: {}, retail_shop: {},
      tags: [], salts: [], taxes: []
    };
    let _dialog = this._dialogService.open(ProductFormComponent);
    _dialog.componentInstance.product = product;
    _dialog.afterClosed().subscribe((data)=>{
      if (data) {
        this.data = this.data.concat(data);
      }

      })
  };

  editProduct(product: Product, index: number): void {
    let _dialog = this._dialogService.open(ProductFormComponent);
    _dialog.componentInstance.product = Object.assign({}, product);
    _dialog.afterClosed().subscribe((data?: Product)=>{
      if (data) {
        this.data[index] = data;
      }
    })
  }


  toggleProduct(product: Product, index: number): void {
    this._loadingService.register('products');
    product.is_enabled = !product.is_enabled;
    this._itemService.update(product.id, product).subscribe(()=> {
      this._loadingService.resolve('products');
    }, ()=>{
      this.data[index].is_enabled = !this.data[index].is_enabled;
      this._loadingService.resolve('products');
    })
  }

}
