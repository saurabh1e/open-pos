import {Component, OnInit} from "@angular/core";
import {Distributor, StocksService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import {RESTService} from "@covalent/http";

@Component({
  selector: 'app-expiry',
  templateUrl: './expiry.component.html',
  styleUrls: ['./expiry.component.scss'],
  viewProviders: [StocksService]
})

export class ExpiryComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    { name: 'id', label: 'ID', sortable: true },
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
  filters: any = {__expired__bool: true};

  constructor(private _titleService: Title,
              private _stockService: StocksService) {
  }


  ngOnInit(): void {
    this._titleService.setTitle('Expiry');
    this.title = 'Expiry';

  }

  filter = (): RESTService<any> => {

    return this._stockService
  };
}
