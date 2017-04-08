import {Component, OnInit} from "@angular/core";
import {DistributorBillsService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {TdDataTableColumn} from "../../td-data-table-column";
import {RESTService} from "@covalent/http";

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
    {name: 'bill_amount', label: 'Amount', numeric: true, sortable: false, format: v => v.toFixed(2)},
    {name: 'total_items', label: 'Items', numeric: true, sortable: true},
  ];

  title: string;
  only: string[] = [];
  include: string[] = ['distributor'];
  filters: any = {};

  constructor(private _titleService: Title,
              private _distributorBillService: DistributorBillsService) {
  }


  ngOnInit(): void {
    this._titleService.setTitle('Bills');
    this.title = 'Bills';

  }

  filter = (): RESTService<any> => {

    return this._distributorBillService
  };

}
