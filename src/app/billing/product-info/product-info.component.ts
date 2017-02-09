import { Component, OnInit } from '@angular/core';
import {TdDialogService} from "@covalent/core";
import {MdDialogRef} from "@angular/material";
import {Product} from "../../../services/items.service";
import {IndexDBServiceService} from "../../../services/indexdb.service";

@Component({
  selector: 'app-product-info',
  templateUrl: 'product-info.component.html',
  styleUrls: ['product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  product: Product;
  products: Product[] = [];

  constructor(private _dialogService: TdDialogService,
              public dialogRef: MdDialogRef<ProductInfoComponent>, private _indexDB: IndexDBServiceService) { }

  ngOnInit() {
    this.product.similar_products.forEach((value)=>{
      this._indexDB.products.get(value).then((data)=>{
        this.products.push(data);
      })
    });
  }

  close():void {
    this.dialogRef.close({t:true});
    // this._dialogService.closeAll();
  }

}
