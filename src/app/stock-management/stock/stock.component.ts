import { Component, OnInit } from '@angular/core';
import {RESTService} from "@covalent/http";
import  { TdDialogService } from "@covalent/core"
import {Stock, StocksService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import { Observable } from 'rxjs/Observable'
import {StockEditComponent} from "./stock-edit/stock-edit.component";


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
    { name: 'expiry_date', label: 'Expiry', sortable: true, numeric: true },
  ];

  title: string;
  include: string[] = ['product', 'distributor_bill'];
  filters: any = {__order_by: '-created_on'};

  constructor(private _titleService: Title,
              private _dialogService: TdDialogService,
              private _stockService: StocksService) {
  }


  ngOnInit(): void {
    this._titleService.setTitle('Stocks');
    this.title = 'Stocks';

  }

  filter = (): RESTService<any> => {

    return this._stockService
  };

  editRow = (stock: Stock): Observable<Stock> => {
    let _dialog = this._dialogService.open(StockEditComponent);
    _dialog.componentInstance.stock = Object.assign({}, stock);
    return _dialog.afterClosed()
  };

}
