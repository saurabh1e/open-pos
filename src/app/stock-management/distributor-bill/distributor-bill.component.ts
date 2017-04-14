import {Component, OnInit} from "@angular/core";
import {TdDialogService} from "@covalent/core";
import {RESTService} from "@covalent/http";
import { Observable } from 'rxjs'

import {DistributorBill, DistributorBillsService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import {BillDetailsComponent} from "./bill-details/bill-details.component";

@Component({
  selector: 'app-distributor-bill',
  templateUrl: './distributor-bill.component.html',
  styleUrls: ['./distributor-bill.component.scss'],
  viewProviders: [DistributorBillsService]
})
export class DistributorBillComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    { name: 'distributor.name', label: 'Distributor', sortable: false, nested: true },
    {name: 'distributor.retail_shop.name', label: 'Shop', sortable: false},
    {name: 'reference_number', label: 'Reference #', numeric: true, sortable: false},
    {name: 'purchase_date', label: 'Date', numeric: true, sortable: true},
    {name: 'bill_amount', label: 'Amount', numeric: true, sortable: false, format: v => v?v.toFixed(2):0},
    {name: 'total_items', label: 'Items', numeric: true, sortable: true},
  ];

  title: string;
  only: string[] = [];
  include: string[] = ['distributor'];
  filters: any = {};

  constructor(private _titleService: Title,
              private _distributorBillService: DistributorBillsService, private _dialogService: TdDialogService) {
  }


  ngOnInit(): void {
    this._titleService.setTitle('Bills');
    this.title = 'Bills';

  }

  editRow = (bill: DistributorBill): Observable<DistributorBill> => {
    let _dialog = this._dialogService.open(BillDetailsComponent, {height: '70%', width: '80%'});
    _dialog.componentInstance.bill = Object.assign({}, bill);
    return _dialog.afterClosed()
  };

  filter = (): RESTService<any> => {

    return this._distributorBillService
  };

}
