import {Component, AfterViewInit} from "@angular/core";
import {TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode, TdDialogService} from "@covalent/core";
import {Salt, SaltsService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {RetailShop} from "../../../services/shop.service";
import {SaltFormComponent} from "./salt-form/salt-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";


@Component({
  selector: 'app-salt',
  templateUrl: 'salt.component.html',
  styleUrls: ['salt.component.scss'],
  entryComponents: [SaltFormComponent]
})
export class SaltComponent implements AfterViewInit {

  data: Salt[] = [];

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
              private _saltService: SaltsService,
              private _dialogService: TdDialogService) {
    this._loadingService.create({
      name: 'salts',
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

    return this._saltService
  };

  addRow(): void {
    let salt = <Salt>{};
    let _dialog = this._dialogService.open(SaltFormComponent);
    _dialog.componentInstance.salt = salt;
    _dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.data = this.data.concat(data);
      }

    })
  };

  editRow = (salt: Salt, index: number): void => {
    let _dialog = this._dialogService.open(SaltFormComponent);
    _dialog.componentInstance.salt = Object.assign({}, salt);
    _dialog.afterClosed().subscribe((data?: Salt) => {
      if (data) {
        this.data[index] = data;
      }
    })
  };


  toggleRow(salt: Salt, index: number): void {
    this._loadingService.register('salts');
    this._saltService.delete(salt.id).subscribe(() => {
      this.data.splice(index, 1);
      this._loadingService.resolve('salts');
    }, () => {
      this._loadingService.resolve('salts');
    })
  }
}

