import { Component, OnInit } from '@angular/core';
import {RESTService} from "@covalent/http";
import {StocksService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  viewProviders: [StocksService]

})
export class StockComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    { name: 'product.name', label: 'Product Name', sortable: true, nested: true },
    { name: 'distributor_bill.distributor.name', label: 'Distributor', sortable: false, nested: true },
    { name: 'purchase_amount', label: 'Purchase (INR)', numeric: true, format: v => v.toFixed(2), sortable: false },
    { name: 'selling_amount', label: 'Selling (INR)', numeric: true, format: v => v.toFixed(2), sortable: false },
    { name: 'product.retail_shop.name', label: 'Shop', sortable: false },
    { name: 'units_purchased', label: 'Units Purchased', numeric: true, sortable: false },
    { name: 'units_sold', label: 'Sold', numeric: true, sortable: true },
    { name: 'expiry_date', label: 'Expiry', sortable: true },
  ];

  title: string;
  include: string[] = ['product', 'distributor_bill'];
  filters: any = {__is_sold__bool: false};

  constructor(private _titleService: Title,
              private _stockService: StocksService) {
  }


  ngOnInit(): void {
    this._titleService.setTitle('Stocks');
    this.title = 'Stocks';

  }

  filter = (): RESTService<any> => {

    return this._stockService
  };
}
