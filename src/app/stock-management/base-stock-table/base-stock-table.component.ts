import {Component, OnInit, Input, OnDestroy} from "@angular/core";
import {TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode, IPageChangeEvent} from "@covalent/core";
import {TdDataTableColumn} from "../../td-data-table-column";
import {RESTService} from "@covalent/http";
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'app-base-stock-table',
  templateUrl: './base-stock-table.component.html',
  styleUrls: ['./base-stock-table.component.scss']
})
export class BaseStockTableComponent implements OnInit, OnDestroy {

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
  filter: () => RESTService<any>;

  @Input()
  include: string[] = [];
  @Input()
  only: string[] = [];

  @Input()
  filters: any = {};

  @Input()
  editRow: (any) => Observable<any>;
  @Input()
  toggleRow: (any) => Observable<any>;
  @Input()
  addRow: () => Observable<any>;

  shops: RetailShop[] = [];
  shop: RetailShop;
  shopsSub: Subscription;
  shopSub: Subscription;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'id';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

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
    this.shop = this._shopService.shop;
    this.shops = this._shopService.shops;
    this.getData();

    this.shopsSub = this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;
      this.getData();
    });
    this.shopSub = this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
      this.getData();
    });

  }

  ngOnDestroy() {
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
    let ids = this.shops.map(item => item.id);
    if (this.shop && this.shop.id) {
      ids = [this.shop.id];
    }
    let filters = {
      __retail_shop_id__in: ids, __include: this.include.concat(['retail_shop']),
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm
    };
    if (this.only.length) {
      filters['__only'] = this.only;
    }
    Object.keys(this.filters).forEach((k)=>{
      filters[k] = this.filters[k]
    });
    this.filter().query(filters)
      .subscribe((resp: {data: any[], total: number}) => {
        this.filteredData = resp.data;
        this.filteredTotal = resp.total;
        this._loadingService.resolve('tables');
      }, () => this._loadingService.resolve('tables'));
  }

  searchProduct = (event): void =>{
    this.filters['__product_name__contains'] = event;
    this.getData();
  };

  searchDistributor = (event): void =>{
    this.filters['__distributor_name__contains'] = event;
    if(event !== undefined)
      this.getData();
  };
}
