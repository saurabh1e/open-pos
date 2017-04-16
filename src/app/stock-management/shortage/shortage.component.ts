import {Component, OnInit} from "@angular/core";
import {ItemsService, Distributor} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import {RESTService} from "@covalent/http";

@Component({
  selector: 'app-shortage',
  templateUrl: './shortage.component.html',
  styleUrls: ['./shortage.component.scss'],
  viewProviders: [ItemsService]
})
export class ShortageComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    { name: 'name', label: 'Product Name', sortable: true, nested: true },
    { name: 'distributors', label: 'Distributor', sortable: false, nested: true, format: v=>v.map((value)=>{return value.name}) },
    {name: 'retail_shop.name', label: 'Shop', sortable: false},
    {name: 'brand.name', label: 'Brand', sortable: false},
    {name: 'available_stock', label: 'Stock', numeric: true, sortable: false},
    {name: 'min_stock', label: 'Min.Qty', numeric: true, sortable: true},
  ];

  title: string;
  only: string[] = ['id', 'name', 'distributors', 'retail_shop', 'available_stock', 'min_stock', 'is_short',
    'stock_required'];
  include: string[] = ['distributors', 'brand'];
  filters: any = {__stock_required__gte: 1, __is_disabled_bool: false};

  constructor(private _titleService: Title,
              private _itemService: ItemsService) {
  }


  ngOnInit(): void {
    this._titleService.setTitle('Shortage');
    this.title = 'Shortage';

  }

  filter = (): RESTService<any> => {

    return this._itemService
  };

}
