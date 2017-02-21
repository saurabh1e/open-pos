import {Component, AfterViewInit} from "@angular/core";
import {TdDialogService} from "@covalent/core";
import {Tag, TagsService} from "../../../services/items.service";
import {TagFormComponent} from "./tag-form/tag-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";
import {Observable} from "rxjs";


@Component({
  selector: 'app-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss'],
  entryComponents: [TagFormComponent]
})
export class TagComponent implements AfterViewInit {

  columns: TdDataTableColumn[] = [
    {name: 'id', label: 'id', sortable: true},
    {name: 'name', label: 'Name', sortable: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true}
  ];

  constructor(
    private _tagService: TagsService,
    private _dialogService: TdDialogService) {
  }

  ngAfterViewInit(): void {

  }

  filter = (): RESTService<any> => {

    return this._tagService
  };

  addRow = (): Observable<Tag> => {
    let tag = <Tag>{};
    let _dialog = this._dialogService.open(TagFormComponent);
    _dialog.componentInstance.tag = tag;
    return _dialog.afterClosed()
  };

  editRow = (tag: Tag): Observable<Tag> => {
    let _dialog = this._dialogService.open(TagFormComponent);
    _dialog.componentInstance.tag = Object.assign({}, tag);
    return _dialog.afterClosed()
  };


  toggleRow = (tag: Tag): Observable<Tag>=>{
    return this._tagService.delete(tag.id)
  }
}

