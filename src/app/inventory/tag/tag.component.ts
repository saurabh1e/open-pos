import { Component, AfterViewInit } from '@angular/core';
import {
  TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn,
  TdLoadingService, LoadingType, LoadingMode
} from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import {Tag, TagsService} from "../../../services/items.service";
import {UsersService} from "../../../services/users.service";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss']
})
export class TagComponent implements AfterViewInit {

  selectedRows = [];

  data: Tag[] = [

  ];

  columns: ITdDataTableColumn[] = [
    {name: 'id', label: 'id' },
    {name: 'name', label: 'Name' },
    {name: 'retail_shop.name', 'label': 'Shop'}
  ];

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;
  shops: number[];
  title: string;
  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'id';
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(
    private _titleService: Title,
    private _loadingService: TdLoadingService,
    private _tagService: TagsService,
    private _userService: UsersService) {
    this._loadingService.create({
      name: 'products',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Product');
    this.title  = 'Products';
    if (this._userService.user) {
      this.shops = this._userService.user.retail_shops;
    }
    this._userService.user$.subscribe((data)=>{
      this.shops = data.retail_shops;
    });

  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
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
    this._loadingService.register('products');
    let sortBy = this.sortBy;
    if (this.sortOrder.toString() == 'DESC'){
      sortBy = '-'.concat(sortBy);
    }
    this._tagService.query({__retail_shop_id__in: this.shops, __include: ['retail_shop'],
      __limit: this.pageSize, __page: this.currentPage, __order_by: sortBy})
      .subscribe((resp: {data: Tag[], total: number})=>{
        this.data = resp.data;
        this.filteredData = resp.data;
        this.filteredTotal = resp.total;
        this._loadingService.resolve('products');
      });
  }

  goBack():void {
    window.history.back();
  }

}

