import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {LoadingMode, LoadingType, TdLoadingService} from "@covalent/core";
import {MdDialogRef} from "@angular/material";
import {FormControl} from "@angular/forms";

import {RetailShop, RetailShopsService} from "../../../../services/shop.service";
import {
  BrandsService,
  Distributor,
  ItemsService,
  Product,
  Salt,
  SaltsService,
  Tag,
  TagsService,
  Tax,
  TaxsService
} from "../../../../services/items.service";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product: Product;
  brands: { display: string, value: string }[] = [];
  taxes: Tax[] = [];
  salts: Salt[] = [];
  tags: Tag[] = [];
  distributors: Distributor[] = [];
  shops: RetailShop[];
  validators = [];
  productCopy: Product = <Product>{};

  constructor(private _itemService: ItemsService,
              private _brandService: BrandsService,
              private _saltService: SaltsService,
              private _taxService: TaxsService,
              public dialogRef: MdDialogRef<ProductFormComponent>,
              private _shopService: RetailShopsService,
              private _tagService: TagsService,
              private _loadingService: TdLoadingService) {
    this._loadingService.create({
      name: 'product-form',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });

    this.shops = this._shopService.shops;
    this._shopService.shops$.subscribe((data) => {
      this.shops = data;
    });

  }

  ngOnInit() {
    this.productCopy = Object.assign({}, this.product);

    this.resetProduct();
    this.validators = [this.validateDescription];
  }

  resetProduct(): void {
    if (this.product.salts) {
      this.salts = this.product.salts;
    }
    if (this.product.taxes) {
      this.taxes = this.product.taxes;
    }
    if (this.product.tags) {
      this.tags = this.product.tags;
    }

    this.brands = this.product.brand && this.product.brand.id ?
      [{display: this.product.brand.name, value: this.product.brand.id}] : [];
  }

  getTags = (event): Observable<string[]> => {
    return this._tagService.query({
      __retail_shop_id__equal: this.product.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data)
  };

  getSalts = (event): Observable<string[]> => {
    return this._saltService.query({
      __retail_shop_id__equal: this.product.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data)
  };
  getTaxes = (event): Observable<string[]> => {
    return this._taxService.query({
      __retail_shop_id__equal: this.product.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data)

  };


  getBrands = (event): Observable<string[]> => {
    return this._brandService.query({
      __retail_shop_id__equal: this.product.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data.map((item) => {
      return {display: item.name, value: item.id}
    }))
  };


  cancelState(): void {
    this.product = Object.assign({}, this.productCopy);
    this.resetProduct()
  }

  saveState(): void {
    this._loadingService.register('product-form');
    if (!this.product.retail_shop_id && this.product.retail_shop.id) {
      this.product.retail_shop_id = this.product.retail_shop.id;
    }
    if (this.product.id) {
      this._itemService.update(this.product.id, this.product).subscribe(() => {
        this._itemService.updateProduct(this.product.id).then(() => {
          this.dialogRef.close(this.product);
          this._loadingService.resolve('product-form');
        });
      }, () => {
        this._loadingService.resolve('product-form');
      })
    }
    else {
      this._itemService.create(this.product).subscribe(() => {
        this._itemService.updateProduct(this.product.id).then(() => {
          this.dialogRef.close(this.product);
          this._loadingService.resolve('product-form');
        });
      })
    }
  }


  addBrand(): void {
    this.product.brand = {
      name: this.brands[0].display, id: this.brands[0].value,
      retail_shop_id: this.product.retail_shop_id
    };
    this.product.brand_id = this.brands[0].value;
  }

  addTags(event: Tag): void {

    this._itemService.updateTag(this.product.id, event.id, 'add').subscribe(() => {
      this.product.tags.push(event);
    }, () => {
      this.tags.splice(this.tags.indexOf(event), 1)
    })
  }

  addSalts(event: Salt): void {
    this._itemService.updateSalt(this.product.id, event.id, 'add').subscribe(() => {
      this.product.salts.push(event);
    }, () => {
      this.salts.splice(this.salts.indexOf(event), 1)
    })
  }

  addTaxes(event: Tax): void {
    this._itemService.updateTax(this.product.id, event.id, 'add').subscribe(() => {
      this.product.taxes.push(event);
    }, () => {
      this.taxes.splice(this.taxes.indexOf(event), 1)
    })
  }

  removeTags(event: Tag): void {
    this._itemService.updateTag(this.product.id, event.id, 'remove').subscribe(_ => {
      this.product.tags.splice(this.product.tags.findIndex((value) => {
        return value.id == event.id
      }), 1)
    }, () => {

      this.tags.push(event);
    });
    return
  }

  removeSalts(event: Salt): void {
    this._itemService.updateSalt(this.product.id, event.id, 'remove').subscribe(_ => {
      this.product.salts.splice(this.product.salts.findIndex((value) => {
        return value.id == event.id
      }), 1)
    }, () => {

      this.salts.push(event);
    });
    return
  }

  removeTaxes(event: Tax): void {
    this._itemService.updateTax(this.product.id, event.id, 'remove').subscribe(_ => {
      this.product.taxes.splice(this.product.taxes.findIndex((value) => {
        return value.id == event.id
      }), 1)
    }, () => {

      this.taxes.push(event);
    });
    return
  }

  close(): void {
    this.dialogRef.close();
  }

  validateDescription = (term?: FormControl) => {
    if (term.value.indexOf(':') < 0) {
      return {'mustContain:': true}
    }
    return null
  };

  public errorMessages = {
    'mustContain:': 'Your key value must be separated by ":" ',
  };

  addDescription = (event): void => {
    event.value = event.value.split(':') [0];
    event.key = event.key.split(':') [1];
  };

  removeDescription(item: {}, index: number): void {
    this.product.description.splice(index, 1)
  }


}
