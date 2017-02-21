import {Component, OnInit, Input} from '@angular/core';
import {TdDataTableSortingOrder, ITdDataTableSortChangeEvent, TdLoadingService, LoadingType, LoadingMode,}from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import {TdDataTableColumn} from "../../td-data-table-column";
import {RESTService} from "@covalent/http";
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {

  @Input()
  columns: TdDataTableColumn[];

  filteredData: any[];
  filteredTotal: number;

  @Input()
  searchTerm: string;

  @Input()
  title: string = '';

  fromRow: number;

  @Input()
  filter:()=> RESTService<any>;

  @Input()
  editRow:(any)=> Observable<any>;
  @Input()
  toggleRow:(any)=> Observable<any>;
  @Input()
  addRow:()=> Observable<any>;

  shops: RetailShop[];
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'id';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _loadingService: TdLoadingService,
              private _shopService: RetailShopsService) {
    this._loadingService.create({
      name: 'tables',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngOnInit() {
    this.setShop();
    this._shopService.shops$.subscribe(()=>{
      this.setShop();
    });

  }

  setShop(): void {
    if (this._shopService.shops && this._shopService.shops.length) {
      this.shops = this._shopService.shops;
      this.getData();
    }
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    console.log(sortEvent);
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.getData();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.getData();
  }

  page(pagingEvent: IPageChangeEvent): void {
    console.log(pagingEvent);
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.getData();
  }

  getData(): void {
    this._loadingService.register('tables');
    let sortBy = this.sortBy;
    if (this.sortOrder.toString() == 'DESC') {
      sortBy = '-'.concat(sortBy);
    }
    this.filter().query({__retail_shop_id__in: this.shops.map(item=>item.id), __include: ['retail_shop'],
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy})
      .subscribe((resp: {data: any[], total: number})=>{
        this.filteredData = resp.data;
        this.filteredTotal = resp.total;
        this._loadingService.resolve('tables');
      });
  }

  edit(row: any, index: number):void {
    this.editRow(row).subscribe((data)=> {
        if (data) {
          this.filteredData[index] = data
        }
    }, ()=> {

    })
  }

  toggle(row: any, index: number):void {
    this._loadingService.register('tables');
    this.toggleRow(row).subscribe((data)=> {
      this.filteredData[index].is_disabled = !this.filteredData[index].is_disabled;
      this._loadingService.resolve('tables');
    }, ()=> {
      this._loadingService.resolve('tables');
    })
  }

  deleteRow(row: any, index: number):void {
    this.toggleRow(row).subscribe(()=> {
      this.filteredData.splice(index, 1);
      this._loadingService.resolve('tables');
    }, ()=> {
      this._loadingService.resolve('tables');
    })
  }
  add(): void {
    this.addRow().subscribe((data)=> {
      if (data) {
        this.filteredData = this.filteredData.concat(data);
      }
    }, ()=> {

    })
  }
}
