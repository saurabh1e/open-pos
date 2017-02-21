import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
import {Tag, TagsService} from "../../../../services/items.service";
import {TdLoadingService, LoadingType, LoadingMode} from "@covalent/core";
import {RetailShopsService, RetailShop} from "../../../../services/shop.service";

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {

  tag: Tag;
  tagCopy: Tag;
  shops: RetailShop[];

  constructor(public dialogRef: MdDialogRef<TagFormComponent>,
              private _loadingService: TdLoadingService,
              private _shopService: RetailShopsService,
              private _tagService: TagsService) {
    this._loadingService.create({
      name: 'tag-form',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    }); }

  ngOnInit() {
    this.shops = this._shopService.shops;
    this._shopService.shops$.subscribe((data) => {
      this.shops = data;
    });
    this.tagCopy = Object.assign({}, this.tag);
  }
  cancelState(): void {
    this.tag = Object.assign({}, this.tagCopy);
  }

  saveState(): void {
    this._loadingService.register('tag-form');
    if (this.tag.id) {
      this._tagService.update(this.tag.id, this.tag).subscribe(() => {
        this.dialogRef.close(this.tag);
        this._loadingService.resolve('tag-form');
      })
    }
    else {
      this._tagService.create(this.tag).subscribe(() => {
        this.dialogRef.close(this.tag);
        this._loadingService.resolve('tag-form');
      })
    }
  }

  close():void {
    this.dialogRef.close();
  }
}
