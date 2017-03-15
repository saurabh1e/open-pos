import {Component, OnInit, Input} from "@angular/core";
import {RetailShop, RetailShopsService} from "../../../../services/shop.service";
import {
  ItemsService,
  TagsService,
  TaxsService,
  BrandsService,
  DistributorService,
  SaltsService,
  Product
} from "../../../../services/items.service";
import {Observable} from "rxjs";
import {TdLoadingService, LoadingType, LoadingMode, TdDialogService} from "@covalent/core";
import {MdDialogRef} from "@angular/material";
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product: Product;
  brands: {display: string, value: string}[] = [];
  taxes: {display: string, value: string}[] = [];
  salts: {display: string, value: string}[] = [];
  tags: {display: string, value: string}[] = [];
  distributors: {display: string, value: string}[] = [];
  shops: RetailShop[];
  validators = [];
  productCopy: Product = <Product>{};

  constructor(private _itemService: ItemsService,
              private _brandService: BrandsService,
              private _distributorService: DistributorService,
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
      this.salts = this.product.salts.map((value) => {
        return {display: value.name, value: value.id}
      });
    }
    if (this.product.taxes) {
      this.taxes = this.product.taxes.map((value) => {
        return {display: value.name, value: value.id}
      });
    }
    if (this.product.tags) {
      this.tags = this.product.tags.map((value) => {
        return {display: value.name, value: value.id}
      });
    }
    this.distributors = this.product.distributor && this.product.distributor.id ?
      [{display: this.product.distributor.name, value: this.product.distributor.id}] : [];
    this.brands = this.product.brand && this.product.brand.id ?
      [{display: this.product.brand.name, value: this.product.brand.id}] : [];
  }

  getTags = (event): Observable<string[]> => {
    return this._tagService.query({
      __retail_shop_id__equal: this.product.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data.map((item) => {
      return {display: item.name, value: item.id}
    }))
  };

  getSalts = (event): Observable<string[]> => {
    return this._saltService.query({
      __retail_shop_id__equal: this.product.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data.map((item) => {
      return {display: item.name, value: item.id}
    }))
  };
  getTaxes = (event): Observable<string[]> => {
    return this._taxService.query({
      __retail_shop_id__equal: this.product.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data.map((item) => {
      return {display: item.name, value: item.id}
    }))

  };


  getBrands = (event): Observable<string[]> => {
    return this._brandService.query({
      __retail_shop_id__equal: this.product.retail_shop_id, __limit: 20
      , __name__contains: event
    }).map(data => data.data.map((item) => {
      return {display: item.name, value: item.id}
    }))
  };
  getDistributors = (event): Observable<string[]> => {
    return this._distributorService.query({
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
        this.dialogRef.close(this.product);
        this._loadingService.resolve('product-form');
      }, ()=>{
        this._loadingService.resolve('product-form');
      })
    }
    else {
      this._itemService.create(this.product).subscribe(() => {
        this.dialogRef.close(this.product);
        this._loadingService.resolve('product-form');
      })
    }
  }

  addDistributor(): void {
    this.product.distributor = {
      name: this.distributors[0].display, id: this.distributors[0].value,
      retail_shop_id: this.product.retail_shop_id
    };
    this.product.distributor_id = this.distributors[0].value;
  }

  addBrand(): void {
    this.product.brand = {
      name: this.brands[0].display, id: this.brands[0].value,
      retail_shop_id: this.product.retail_shop_id
    };
    this.product.brand_id = this.brands[0].value;
  }

  addTags(): void {
    this.product.tags = this.tags.map((value) => {
      return {
        name: value.display, id: value.value,
        retail_shop_id: this.product.retail_shop_id
      };
    });
  }

  addSalts(): void {
    this.product.salts = this.salts.map((value) => {
      return {
        name: value.display, id: value.value,
        retail_shop_id: this.product.retail_shop_id
      };
    });
  }

  addTaxes(): void {
    this.product.taxes = this.taxes.map((value) => {
      return {name: value.display, id: value.value};
    });
  }

  close():void {
    this.dialogRef.close();
  }

  validateDescription = (term?: FormControl) =>{
    if(term.value.indexOf(':')<0){
      return {'mustContain:': true}
    }
    return null
  };

  public errorMessages = {
    'mustContain:': 'Your key value must be separated by ":" ',
  };

  addDescription = (event): void =>{
    event.value = event.value.split(':') [0];
    event.key = event.key.split(':') [1];
  };

  removeDescription(item: {}, index: number): void {
    this.product.description.splice(index, 1)
  }



}
