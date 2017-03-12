import {Component, OnInit} from "@angular/core";
import {
  TdDialogService,
  TdDataTableSortingOrder,
  TdLoadingService,
  LoadingType,
  LoadingMode,
  IPageChangeEvent
} from "@covalent/core";
import {TdDataTableColumn} from "../../td-data-table-column";
import {DateFormatter} from "@angular/common/src/pipes/intl";
import {Title} from "@angular/platform-browser";
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Subscription} from "rxjs";
import {CustomerService, Customer} from "../../../services/customer.service";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  viewProviders: [CustomerService],
  entryComponents: [CustomerDetailComponent]
})
export class CustomerComponent implements OnInit {

  columns: TdDataTableColumn[] = [
    {name: 'name', label: 'name', sortable: true, nested: true},
    {name: 'mobile_number', label: 'Number', sortable: true, nested: true},
    {name: 'total_billing', label: 'Total Billing', numeric: true, format: v => v.toFixed(2)},
    {name: 'amount_due', label: 'Due', numeric: true, format: v => v.toFixed(2)},
    {name: 'total_order', label: 'Orders', numeric: true},
    {name: 'created_on', label: 'Added on', format: v => DateFormatter.format(new Date(v), 'en', 'dd/MM/yy hh:mm')},
  ];

  ngOnInit() {
  }

  filteredData: Customer[] = [];
  filteredTotal: number = 0;
  shops: RetailShop[];
  shop: RetailShop;
  shopsSub: Subscription;
  title: string;
  searchTerm: string = '';
  customerNumber: number;
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'id';
  customer: Customer;

  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _titleService: Title,
              private _loadingService: TdLoadingService,
              private _customerService: CustomerService,
              private _shopService: RetailShopsService,
              private _dialogService: TdDialogService) {
    this._loadingService.create({
      name: 'customer',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Customer');
    this.title = 'Customer';
    this.shops = this._shopService.shops;

    this.shopsSub = this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;
    });
  }


  sort(name: string, sortOrder: TdDataTableSortingOrder): void {
    this.sortBy = name;
    if (sortOrder.toString() == 'ASC') {
      this.sortOrder = TdDataTableSortingOrder.Descending
    }
    else {
      this.sortOrder = TdDataTableSortingOrder.Ascending
    }
    this.filter();
  }

  search(searchTerm: string): void {
    this.customerNumber = null;
    if (parseInt(searchTerm)) {
      this.customerNumber = parseInt(searchTerm);
    }
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    this._loadingService.register('customer');
    let sortBy = this.sortBy;
    if (this.sortOrder.toString() == 'DESC') {
      sortBy = '-'.concat(sortBy);
    }
    let id = this.shops[0].retail_brand_id;
    let filters: {} = {
      __retail_brand_id__equal: id,
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy,
    };
    if (this.customerNumber) {
      filters['__mobile_number__contains'] = this.customerNumber
    }
    else {
      filters['__name__contains'] = this.searchTerm
    }
    this._customerService.query(filters).subscribe((resp: {data: Customer[], total: number}) => {
      this.filteredData = resp.data;
      this.filteredTotal = resp.total;
      this._loadingService.resolve('customer');
    }, () => {
      this._loadingService.resolve('customer');
    });
  }

  showDetail(customer: Customer): void {
    this._loadingService.register('customer');
    this._customerService.query({__id__equal: customer.id, __include: ['transactions', 'addresses']})
      .subscribe((data: {data: Customer[]}) => {
        this.customer = data.data[0];
        this._loadingService.resolve('customer');
        let _dialog = this._dialogService.open(CustomerDetailComponent);
        _dialog.componentInstance.customer = this.customer;
        _dialog.afterClosed().subscribe((data: number) => {
          customer.amount_due = data;
        });
      })
  }
}
