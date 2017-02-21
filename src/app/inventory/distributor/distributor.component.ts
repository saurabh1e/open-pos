import {Component, AfterViewInit} from "@angular/core";
import {TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode, TdDialogService} from "@covalent/core";

import {Title} from "@angular/platform-browser";
import {RetailShop} from "../../../services/shop.service";
import {DistributorFormComponent} from "./distributor-form/distributor-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";
import {Distributor, DistributorService} from "../../../services/items.service";


@Component({
  selector: 'app-distributor',
  templateUrl: 'distributor.component.html',
  styleUrls: ['distributor.component.scss'],
  entryComponents: [DistributorFormComponent]
})
export class DistributorComponent implements AfterViewInit {

  data: Distributor[] = [];

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
              private _distributorService: DistributorService,
              private _dialogService: TdDialogService) {
    this._loadingService.create({
      name: 'distributors',
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

    return this._distributorService
  };

  addRow(): void {
    let distributor = <Distributor>{};
    let _dialog = this._dialogService.open(DistributorFormComponent);
    _dialog.componentInstance.distributor = distributor;
    _dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.data = this.data.concat(data);
      }

    })
  };

  editRow = (distributor: Distributor, index: number): void => {
    let _dialog = this._dialogService.open(DistributorFormComponent);
    _dialog.componentInstance.distributor = Object.assign({}, distributor);
    _dialog.afterClosed().subscribe((data?: Distributor) => {
      if (data) {
        this.data[index] = data;
      }
    })
  };


  toggleRow(distributor: Distributor, index: number): void {
    this._loadingService.register('distributors');
    this._distributorService.delete(distributor.id).subscribe(() => {
      this.data.splice(index, 1);
      this._loadingService.resolve('distributors');
    }, () => {
      this._loadingService.resolve('distributors');
    })
  }
}

