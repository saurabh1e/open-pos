import {Component, AfterViewInit} from "@angular/core";
import {TdDialogService} from "@covalent/core";
import {Salt, SaltsService} from "../../../services/items.service";
import {SaltFormComponent} from "./salt-form/salt-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";
import {Observable} from "rxjs";


@Component({
  selector: 'app-salt',
  templateUrl: 'salt.component.html',
  styleUrls: ['salt.component.scss'],
  entryComponents: [SaltFormComponent]
})
export class SaltComponent implements AfterViewInit {

  columns: TdDataTableColumn[] = [
    {name: 'name', label: 'Name', sortable: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true}
  ];

  constructor(
    private _saltService: SaltsService,
    private _dialogService: TdDialogService) {
  }

  ngAfterViewInit(): void {

  }

  filter = (): RESTService<any> => {

    return this._saltService
  };

  addRow = (): Observable<Salt> => {
    let salt = <Salt>{};
    let _dialog = this._dialogService.open(SaltFormComponent);
    _dialog.componentInstance.salt = salt;
    return _dialog.afterClosed()
  };

  editRow = (salt: Salt): Observable<Salt> => {
    let _dialog = this._dialogService.open(SaltFormComponent);
    _dialog.componentInstance.salt = Object.assign({}, salt);
    return _dialog.afterClosed()
  };


  toggleRow = (salt: Salt): Observable<Salt>=>{
    return this._saltService.delete(salt.id)
  }
}

