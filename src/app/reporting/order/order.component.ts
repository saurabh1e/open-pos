import { Component, OnInit } from '@angular/core';
import {TdDialogService} from "@covalent/core";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";
import {OrdersService} from "../../../services/orders.service";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    {name: 'id', label: 'id', sortable: true},
    {name: 'name', label: 'Name', sortable: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true}
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

