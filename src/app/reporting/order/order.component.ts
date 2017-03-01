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
import {OrdersService, Order} from "../../../services/orders.service";
import {DateFormatter} from "@angular/common/src/pipes/intl";
import {Title} from "@angular/platform-browser";
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {UsersService} from "../../../services/users.service";
;


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  data: Order[]=[];

  columns: TdDataTableColumn[] = [
    {name: 'id', label: 'id', sortable: true},
    {name: 'customer.name', label: 'Customer', sortable: true, nested: true},
    {name: 'customer.mobile_number', label: 'Number', sortable: true, nested: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true},
    {name: 'total', label: 'Total', numeric: true, format: v => v.toFixed(2)},
    {name: 'amount_due', label: 'Due', numeric: true, format: v => v.toFixed(2)},
    {name: 'items_count', label: 'Items', numeric: true},
    {name: 'auto_discount', label: 'Discount', numeric: true},
    {name: 'created_on', label: 'Date', format: v => DateFormatter.format(new Date(v), 'en', 'dd/MM/yy hh:mm')},
  ];

  ngOnInit() {
  }

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;
  shops: RetailShop[];
  title: string;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'id';
  order: Order;

  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _titleService: Title,
              private _loadingService: TdLoadingService,
              private _orderService: OrdersService,
              private _shopService: RetailShopsService,
              private _dialogService: TdDialogService,
              private _userService: UsersService) {
    this._loadingService.create({
      name: 'orders',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Order');
    this.title = 'Orders';
    if (this._userService.user) {
      this.shops = this._shopService.shops;
    }
    this._shopService.shops$.subscribe((data) => {
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
    this._loadingService.register('orders');
    let sortBy = this.sortBy;
    if (this.sortOrder.toString() == 'DESC') {
      sortBy = '-'.concat(sortBy);
    }
    this._orderService.query({
      __retail_shop_id__in: this.shops.map(item => item.id), __include: ['retail_shop'],
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm
    }).subscribe((resp: {data: Order[], total: number}) => {
        this.data = resp.data;
        this.filteredData = resp.data;
        this.filteredTotal = resp.total;
        this._loadingService.resolve('orders');
      });
  }


  toggle(order: Order, index: number): void {
    let message = 'Void';
    if (order.is_void) {
      message = 'Unvoid';
    }
    this._dialogService.openConfirm({
      message: 'Are you sure you want to ' + message + ' this Order?',
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, '+message,
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this._loadingService.register('orders');
        order.is_void = !order.is_void;
        this._orderService.update(order.id, <Order>{is_void: order.is_void, id: order.id}).subscribe(() => {
          this._loadingService.resolve('orders');
        }, () => {
          this.data[index].is_void = !this.data[index].is_void;
          this._loadingService.resolve('orders');
        })
      } else {

      }
    })
  }
}
