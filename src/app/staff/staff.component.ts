import {Component, OnInit, OnDestroy} from "@angular/core";
import {
  TdDialogService,
  TdDataTableSortingOrder,
  TdLoadingService,
  LoadingType,
  LoadingMode,
  IPageChangeEvent, TdMediaService
} from "@covalent/core";
import {TdDataTableColumn} from "../td-data-table-column";
import {Order} from "../../services/orders.service";
import {Title} from "@angular/platform-browser";
import {Subscription} from "rxjs";
import {IUser, Role, RolesService, UsersService} from "../../services/users.service";
import {StaffDetailComponent} from "./staff-detail/staff-detail.component";
import {RetailShop, RetailShopsService} from "../../services/shop.service";


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
  entryComponents: [StaffDetailComponent],
  viewProviders: [RolesService]
})
export class StaffComponent implements OnInit, OnDestroy {

  columns: TdDataTableColumn[] = [
    {name: 'name', label: 'Name', numeric: false, sortable: true},
    {name: 'email', label: 'Email', sortable: true, nested: true},
    {name: 'mobile_number', label: 'Number', sortable: true, nested: true},
    {name: 'active', label: 'Active'},
    {name: 'login_count', label: 'Login Count'},
    {
      name: 'last_login_at',
      label: 'Last Login',
    },
    {
      name: 'current_login_at',
      label: 'Current Login',
    },
    {name: 'created_on', label: 'Added On'},
  ];


  filteredData: IUser[] = [];
  filteredTotal: number = 0;
  user: IUser;
  userSub: Subscription;
  title: string;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'name';
  order: Order;
  roles: Role[];
  shops: RetailShop[] = [];
  shopsSub: Subscription;

  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  constructor(private _titleService: Title,
              public media: TdMediaService,
              private _loadingService: TdLoadingService,
              private _userService: UsersService,
              private _shopService: RetailShopsService,
              private _roleService: RolesService,
              private _dialogService: TdDialogService) {
    this._loadingService.create({
      name: 'orders',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngOnInit() {
    this._roleService.query({__include: ['permissions']}).subscribe((data: {data: Role[]})=>{
      this.roles = data.data;
    })
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Staff');
    this.title = 'Staff';
    this.user = this._userService.user;
    if (this.user) {
      this.filter();
    }
    this.userSub = this._userService.user$.subscribe((data: IUser) => {
      this.user = data;
      this.filter();
    });
    this.media.broadcast();
    this.shops = this._shopService.shops;
    this.shopsSub = this._shopService.shops$.subscribe((data: RetailShop[]) => {
      this.shops = data;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.shopsSub.unsubscribe();
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
    this._loadingService.register('users');
    let sortBy = this.sortBy;
    if (this.sortOrder.toString() == 'DESC') {
      sortBy = '-'.concat(sortBy);
    }

    this._userService.query({
      __retail_brand_id__in: this.user.brand_id, __include: ['login_count', 'current_login_ip',
        'last_login_ip', 'last_login_at', 'current_login_at', 'created_on'],
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy, __name__contains: this.searchTerm
    }).subscribe((resp: {data: IUser[], total: number}) => {
      this.filteredData = resp.data;
      this.filteredTotal = resp.total;
      this._loadingService.resolve('users');
    }, () => {
      this._loadingService.resolve('users');
    });
  }


  toggle(user: IUser, index: number): void {
    let message = 'Active';
    if (user.active) {
      message = 'Deactivate';
    }
    this._dialogService.openConfirm({
      message: 'Are you sure you want to ' + message + ' this User?',
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, ' + message,
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this._loadingService.register('users');
        user.active = !user.active;
        this._userService.update(user.id, <IUser>{active: user.active, id: user.id}).subscribe(() => {
          this._loadingService.resolve('users');

        }, () => {
          this.filteredData[index].active = !this.filteredData[index].active;
          this._loadingService.resolve('users');
        })
      } else {

      }
    })
  }

  showDetail(user: Order): void {
    this._loadingService.register('users');
    this._userService.query({
      __id__equal: user.id, __include: ['permissions', 'roles',]
    })
      .subscribe((data: {data: IUser[]}) => {
        this.user = data.data[0];
        this._loadingService.resolve('users');
        let _dialog = this._dialogService.open(StaffDetailComponent);
        _dialog.componentInstance.user = this.user;
        _dialog.componentInstance.roles = this.roles;
        _dialog.componentInstance.shops = this.shops;
        _dialog.afterClosed();
      })
  }
}
