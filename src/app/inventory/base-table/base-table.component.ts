import {Component, OnInit, Input} from '@angular/core';
import {
  TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode,
  TdDialogService,
}from '@covalent/core';
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

  shops: RetailShop[] = [];
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'id';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _loadingService: TdLoadingService,
              private _dialogService: TdDialogService,
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
    }
  }

  sort(name: string, sortOrder: TdDataTableSortingOrder): void {
    this.sortBy = name;
    if (sortOrder.toString() == 'ASC') {
      this.sortOrder = TdDataTableSortingOrder.Descending
    }
    else {
      this.sortOrder = TdDataTableSortingOrder.Ascending
    }
    this.getData();
  }
  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.getData();
  }

  page(pagingEvent: IPageChangeEvent): void {
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
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm})
      .subscribe((resp: {data: any[], total: number})=>{
        this.filteredData = resp.data;
        this.filteredTotal = resp.total;
        this._loadingService.resolve('tables');
      }, ()=>this._loadingService.resolve('tables'));
  }

  edit(row: any, index: number):void {
    this.editRow(row).subscribe((data)=> {
        if (data) {
          this.filteredData[index] = data
        }
    }, ()=> {

    })
  }

  toggle(row: any):void {

  let message = 'disable';

  if (row.is_disabled) {
    message = 'enable'
    }

    this._dialogService.openConfirm({
      message: 'Are you sure you want ' + message + ' to  this Item?',
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, '+message,
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this._loadingService.register('tables');
        this.toggleRow(row).subscribe(() => {
            this._loadingService.resolve('tables');
          },
          () => {
            this._loadingService.resolve('tables');
          })
      }
    });
  }

  deleteRow(row: any, index: number):void {
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete this Item?',
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, Delete',
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this._loadingService.register('tables');
        this.toggleRow(row).subscribe(()=> {
          this.filteredData.splice(index, 1);
          this._loadingService.resolve('tables');
        }, ()=> {
          this._loadingService.resolve('tables');
        })

      }
      else {

      }
    });
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
