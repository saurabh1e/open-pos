import {Component, AfterViewInit} from "@angular/core";
import {TdDialogService} from "@covalent/core";
import {Product, ItemsService, Brand, Distributor} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import {ProductFormComponent} from "./product-form/product-form.component";
import {Observable} from "rxjs";
import {RESTService} from "@covalent/http";


@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss'],
  entryComponents: [ProductFormComponent]
})

export class ProductComponent implements AfterViewInit {

  data: Product[] = [];
  include: string[] = ['brand', 'distributor'];

  columns: TdDataTableColumn[] = [
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
    {
      name: 'default_quantity',
      label: 'Def. Qty',
      numeric: true,
      format: v => v?v.toFixed(2):1,
    },
    {name: 'retail_shop.name', label: 'Shop', sortable: false},
    {name: 'available_stock', label: 'Stock', numeric: true, sortable: true},
    {name: 'min_stock', label: 'Min.Qty', numeric: true, sortable: true},
  ];

  title: string;
  product: Product;

  constructor(private _titleService: Title,
              private _itemService: ItemsService,
              private _dialogService: TdDialogService) {
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Product');
    this.title = 'Products';
  }


  filter = (): RESTService<any> => {

    return this._itemService
  };

  addRow = (): Observable<Product> => {
    let product = <Product>{};
    let _dialog = this._dialogService.open(ProductFormComponent);
    _dialog.componentInstance.product = product;
    return _dialog.afterClosed()
  };

  editRow = (product: Product): Observable<Product> => {
    let _dialog = this._dialogService.open(ProductFormComponent);
    _dialog.componentInstance.product = Object.assign({}, product);
    return _dialog.afterClosed()
  };


  toggleRow = (product: Product): Observable<Product> => {
    product.is_disabled = !product.is_disabled;
    return this._itemService.update(product.id, product)
  }

}
