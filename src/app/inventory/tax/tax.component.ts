import {Component, AfterViewInit} from "@angular/core";
import {TdDialogService} from "@covalent/core";
import {Tax, TaxsService} from "../../../services/items.service";
import {TaxFormComponent} from "./tax-form/tax-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-tax',
  templateUrl: 'tax.component.html',
  styleUrls: ['tax.component.scss'],
  entryComponents: [TaxFormComponent]
})
export class TaxComponent implements AfterViewInit {

  columns: TdDataTableColumn[] = [
    {name: 'name', label: 'Name', sortable: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true}
  ];
  title: string;

  constructor(
    private _taxService: TaxsService,
    private _titleService: Title,
    private _dialogService: TdDialogService) {
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Tax');
    this.title = 'Tax';
  }

  filter = (): RESTService<any> => {

    return this._taxService
  };

  addRow = (): Observable<Tax> => {
    let tax = <Tax>{};
    let _dialog = this._dialogService.open(TaxFormComponent);
    _dialog.componentInstance.tax = tax;
    return _dialog.afterClosed()
  };

  editRow = (tax: Tax): Observable<Tax> => {
    let _dialog = this._dialogService.open(TaxFormComponent);
    _dialog.componentInstance.tax = Object.assign({}, tax);
    return _dialog.afterClosed()
  };


  toggleRow = (tax: Tax): Observable<Tax> => {
    tax.is_disabled = !tax.is_disabled;
    return this._taxService.update(tax.id, tax)
  }
}
