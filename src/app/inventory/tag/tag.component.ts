import {Component, AfterViewInit} from "@angular/core";
import {TdDataTableSortingOrder, TdLoadingService, LoadingType, LoadingMode, TdDialogService} from "@covalent/core";
import {Tag, TagsService} from "../../../services/items.service";
import {Title} from "@angular/platform-browser";
import {RetailShop} from "../../../services/shop.service";
import {TagFormComponent} from "./tag-form/tag-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";


@Component({
  selector: 'app-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss'],
  entryComponents: [TagFormComponent]
})
export class TagComponent implements AfterViewInit {

  data: Tag[] = [];

  columns: TdDataTableColumn[] = [
    {name: 'id', label: 'id', sortable: true},
    {name: 'name', label: 'Name', sortable: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true}
  ];

  shops: RetailShop[];
  title: string;
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _titleService: Title,
              private _loadingService: TdLoadingService,
              private _tagService: TagsService,
              private _dialogService: TdDialogService) {
    this._loadingService.create({
      name: 'tags',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Product');
    this.title = 'Products';

  }

  filter = (): RESTService<any> => {

    return this._tagService
  };

  addRow(): void {
    let tag = <Tag>{};
    let _dialog = this._dialogService.open(TagFormComponent);
    _dialog.componentInstance.tag = tag;
    _dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.data = this.data.concat(data);
      }

    })
  };

  editRow = (tag: Tag, index: number): void => {
    let _dialog = this._dialogService.open(TagFormComponent);
    _dialog.componentInstance.tag = Object.assign({}, tag);
    _dialog.afterClosed().subscribe((data?: Tag) => {
      if (data) {
        this.data[index] = data;
      }
    })
  };


  toggleRow(tag: Tag, index: number): void {
    this._loadingService.register('tags');
    this._tagService.delete(tag.id).subscribe(() => {
      this.data.splice(index, 1);
      this._loadingService.resolve('tags');
    }, () => {
      this._loadingService.resolve('tags');
    })
  }
}

