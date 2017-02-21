import {Component, AfterViewInit} from "@angular/core";
import {TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode, TdDialogService} from "@covalent/core";
import {Tax, TaxsService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {RetailShop} from "../../../services/shop.service";
import {TaxFormComponent} from "./tax-form/tax-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";


@Component({
  selector: 'app-tax',
  templateUrl: 'tax.component.html',
  styleUrls: ['tax.component.scss'],
  entryComponents: [TaxFormComponent]
})
export class TaxComponent implements AfterViewInit {

  data: Tax[] = [];

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
              private _taxService: TaxsService,
              private _dialogService: TdDialogService) {
    this._loadingService.create({
      name: 'taxs',
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

    return this._taxService
  };

  addRow(): void {
    let tax = <Tax>{};
    let _dialog = this._dialogService.open(TaxFormComponent);
    _dialog.componentInstance.tax = tax;
    _dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.data = this.data.concat(data);
      }

    })
  };

  editRow = (tax: Tax, index: number): void => {
    let _dialog = this._dialogService.open(TaxFormComponent);
    _dialog.componentInstance.tax = Object.assign({}, tax);
    _dialog.afterClosed().subscribe((data?: Tax) => {
      if (data) {
        this.data[index] = data;
      }
    })
  };


  toggleRow(tax: Tax, index: number): void {
    this._loadingService.register('taxs');
    this._taxService.delete(tax.id).subscribe(() => {
      this.data.splice(index, 1);
      this._loadingService.resolve('taxs');
    }, () => {
      this._loadingService.resolve('taxs');
    })
  }
}

