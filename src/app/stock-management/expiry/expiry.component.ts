import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import {RESTService} from "@covalent/http";
import { NgDateRangePickerOptions } from 'ng-daterangepicker';

import {Distributor, StocksService} from "../../../services/items.service";


@Component({
  selector: 'app-expiry',
  templateUrl: './expiry.component.html',
  styleUrls: ['./expiry.component.scss'],
  viewProviders: [StocksService]
})

export class ExpiryComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    { name: 'product', label: 'Product Name', sortable: true, nested: true, format: v=>v.name },
    { name: 'distributor_name', label: 'Distributor', sortable: false, nested: true },
    { name: 'purchase_amount', label: 'Purchase (INR)', numeric: true, format: v => v.toFixed(2), sortable: false },
    { name: 'selling_amount', label: 'Selling (INR)', numeric: true, format: v => v.toFixed(2), sortable: false },
    { name: 'product', label: 'Shop', sortable: false, format: v=>v.retail_shop.name },
    { name: 'units_purchased', label: 'Units Purchased', numeric: true, sortable: false },
    { name: 'units_sold', label: 'Sold', numeric: true, sortable: true },
    { name: 'expiry_date', label: 'Expiry', sortable: true },
  ];

  title: string;
  include: string[] = ['product', 'distributor_name'];
  filters: any = {__expired__bool: true};
  dateFilter: any = {fromDate:'__expiry_date__date_gte', toDate:'__expiry_date__date_lte'};
  options: NgDateRangePickerOptions;

  constructor(private _titleService: Title,
              private _stockService: StocksService) {
  }


  ngOnInit(): void {
    this._titleService.setTitle('Expiry');
    this.title = 'Expiry';
    this.options = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yMd',
      outputFormat: 'DD/MM/YYYY',
      startOfWeek: 1
    };
  }

  filter = (): RESTService<any> => {

    return this._stockService
  };
}
