import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {
  TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode,
  TdDialogService, IPageChangeEvent
}from '@covalent/core';
import {TdDataTableColumn} from "../../td-data-table-column";
import {RESTService} from "@covalent/http";
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit, OnDestroy {

  @Input()
  columns: TdDataTableColumn[];

  filteredData: any[] = [];
  filteredTotal: number;

  @Input()
  searchTerm: string;

  @Input()
  title: string = '';

  fromRow: number;

  @Input()
  filter:()=> RESTService<any>;

  @Input()
  include:string[]=[];

  @Input()
  editRow:(any)=> Observable<any>;
  @Input()
  toggleRow:(any)=> Observable<any>;
  @Input()
  addRow:()=> Observable<any>;

  shops: RetailShop[] = [];
  shop: RetailShop;
  shopsSub: Subscription;
  shopSub: Subscription;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'name';
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
    this.shop = this._shopService.shop;
    this.shops = this._shopService.shops;
    if (this.shops.length) {
      this.getData();
    }
    this.shopsSub = this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;
      this.getData();
    });
    this.shopSub = this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
      this.getData();
    });

  }
  ngOnDestroy(){
    this.shopsSub.unsubscribe();
    this.shopSub.unsubscribe();
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
    let ids = this.shops.map(item=>item.id);
    if (this.shop && this.shop.id) {
      ids = [this.shop.id];
    }
    this.filter().query({__retail_shop_id__in: ids, __include: this.include.concat(['retail_shop']),
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
            row.is_disabled = !row.is_disabled;
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
