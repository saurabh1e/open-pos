import { Component, OnInit } from '@angular/core';
import {TdDialogService} from "@covalent/core";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";
import {OrdersService} from "../../../services/orders.service";
import {DateFormatter} from "@angular/common/src/pipes/intl";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    {name: 'id', label: 'id', sortable: true},
    {name: 'customer.name', label: 'Customer', sortable: true, nested: true },
    {name: 'customer.mobile_number', label: 'Number', sortable: true, nested: true },
    {name: 'retail_shop.name', 'label': 'Shop', nested: true },
    {name: 'total', label: 'Total', numeric: true, format:v=>v.toFixed(2)},
    {name: 'amount_due', label: 'Due', numeric: true, format:v=>v.toFixed(2)},
    {name: 'items_count', label: 'Items', numeric: true},
    {name: 'auto_discount', label: 'Discount', numeric: true},
    {name: 'created_on', label: 'Date', format:v=>DateFormatter.format(new Date(v), 'en', 'dd/MM/yy hh:mm')},
  ];

  constructor(
    private _orderService: OrdersService,
    private _dialogService: TdDialogService) {
  }

  ngOnInit() {
  }

  filter = (): RESTService<any> => {

    return this._orderService
  };


}

