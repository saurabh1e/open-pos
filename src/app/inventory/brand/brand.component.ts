import {Component, AfterViewInit} from "@angular/core";
import {TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode, TdDialogService} from "@covalent/core";
import {Brand, BrandsService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {RetailShop} from "../../../services/shop.service";
import {BrandFormComponent} from "./brand-form/brand-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";


@Component({
  selector: 'app-brand',
  templateUrl: 'brand.component.html',
  styleUrls: ['brand.component.scss'],
  entryComponents: [BrandFormComponent]
})
export class BrandComponent implements AfterViewInit {

  data: Brand[] = [];

  columns: TdDataTableColumn[] = [
    {name: 'id', label: 'id', sortable: true},
    {name: 'name', label: 'Name', sortable: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true}
  ];

  shops: RetailShop[];
  title: string;
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _titleService: Title,
              private _loadingService: TdLoadingService,
              private _brandService: BrandsService,
              private _dialogService: TdDialogService) {
    this._loadingService.create({
      name: 'brands',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Product');
    this.title = 'Products';

  }

  filter = (): RESTService<any> => {

    return this._brandService
  };

  addRow(): void {
    let brand = <Brand>{};
    let _dialog = this._dialogService.open(BrandFormComponent);
    _dialog.componentInstance.brand = brand;
    _dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.data = this.data.concat(data);
      }

    })
  };

  editRow = (brand: Brand, index: number): void => {
    let _dialog = this._dialogService.open(BrandFormComponent);
    _dialog.componentInstance.brand = Object.assign({}, brand);
    _dialog.afterClosed().subscribe((data?: Brand) => {
      if (data) {
        this.data[index] = data;
      }
    })
  };


  toggleRow(brand: Brand, index: number): void {
    this._loadingService.register('brands');
    this._brandService.delete(brand.id).subscribe(() => {
      this.data.splice(index, 1);
      this._loadingService.resolve('brands');
    }, () => {
      this._loadingService.resolve('brands');
    })
  }
}

