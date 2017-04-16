import {Component, OnInit, OnDestroy, AfterViewInit} from "@angular/core";
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
import {Title} from "@angular/platform-browser";
import {RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Subscription} from "rxjs";
import {OrderDetailComponent} from "./order-detail/order-detail.component";


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  entryComponents: [OrderDetailComponent]
})
export class OrderComponent implements OnInit, OnDestroy, AfterViewInit {

  data: Order[]=[];

  columns: TdDataTableColumn[] = [
    {name: 'invoice_number', label: 'Invoice', numeric: false, format: v => '#'+v, sortable: true},
    {name: 'customer', label: 'Customer', sortable: true, nested: true, format: v=>v.name},
    {name: 'customer', label: 'Number', sortable: true, nested: true, format: v=>v.mobile_number},
    {name: 'retail_shop', 'label': 'Shop', nested: true, format: v=>v.name},
    {name: 'total', label: 'Total', numeric: true, format: v => v.toFixed(2)},
    {name: 'amount_due', label: 'Due', numeric: true, format: v => v.toFixed(2)},
    {name: 'items_count', label: 'Items', numeric: true},
    {name: 'auto_discount', label: 'Discount', numeric: true},
    {name: 'created_on', label: 'Date'},
    {name: 'created_by.name', label: 'Created By', nested: true},
  ];

  ngOnInit() {
  }

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;
  shops: RetailShop[];
  shop: RetailShop;
  shopsSub: Subscription;
  shopSub: Subscription;
  title: string;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'invoice_number';
  order: Order;

  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _titleService: Title,
              private _loadingService: TdLoadingService,
              private _orderService: OrdersService,
              private _shopService: RetailShopsService,
              private _dialogService: TdDialogService) {
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
    this.shop = this._shopService.shop;
    this.shops = this._shopService.shops;

    this.shopsSub = this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;
    });
    this.shopSub = this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
      this.filter();
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
    let ids = this.shops.map(item=>item.id);
    if (this.shop && this.shop.id) {
      ids = [this.shop.id];
    }

    this._orderService.query({
      __retail_shop_id__in: ids, __include: ['retail_shop'],
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm
    }).subscribe((resp: {data: Order[], total: number}) => {
        this.data = resp.data;
        this.filteredData = resp.data;
        this.filteredTotal = resp.total;
        this._loadingService.resolve('orders');
      }, ()=>{
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
          this._shopService.getOrderItemUpdate(order.retail_shop_id, null, 1 , {__order_id__equal: order.id}).then(()=>{
            this._loadingService.resolve('orders');
          });

        }, () => {
          this.data[index].is_void = !this.data[index].is_void;
          this._loadingService.resolve('orders');
        })
      } else {

      }
    })
  }

  showDetail(order: Order): void {
    this._loadingService.register('orders');
    this._orderService.query({__id__equal: order.id, __include:['customer', 'address', 'items', 'discounts']})
      .subscribe((data: {data: Order[]})=>{
        this.order = data.data[0];
        this._loadingService.resolve('orders');
        let _dialog = this._dialogService.open(OrderDetailComponent);
        _dialog.componentInstance.order = this.order;
        _dialog.afterClosed();
      })
  }
}
