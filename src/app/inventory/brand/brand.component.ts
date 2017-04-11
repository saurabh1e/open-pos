import {Component, AfterViewInit} from "@angular/core";
import {TdDialogService} from "@covalent/core";
import {Brand, BrandsService} from "../../../services/items.service";
import {BrandFormComponent} from "./brand-form/brand-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-brand',
  templateUrl: 'brand.component.html',
  styleUrls: ['brand.component.scss'],
  entryComponents: [BrandFormComponent]
})
export class BrandComponent implements AfterViewInit {

  columns: TdDataTableColumn[] = [
    {name: 'name', label: 'Name', sortable: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true},
    {name: 'distributors', label: 'Distributor', sortable: false, nested: true, format:  v => v?v.map((value)=>{
      return value.name
    }):''},
  ];

  title: string;

  constructor(private _titleService: Title,
              private _brandService: BrandsService,
              private _dialogService: TdDialogService) {
  }

  ngAfterViewInit(): void {
    this._titleService.setTitle('Brand');
    this.title = 'Brand';
  }

  filter = (): RESTService<any> => {

    return this._brandService
  };

  addRow = (): Observable<Brand> => {
    let brand = <Brand>{};
    let _dialog = this._dialogService.open(BrandFormComponent);
    _dialog.componentInstance.brand = brand;
    return _dialog.afterClosed()
  };

  editRow = (brand: Brand): Observable<Brand> => {
    let _dialog = this._dialogService.open(BrandFormComponent);
    _dialog.componentInstance.brand = Object.assign({}, brand);
    return _dialog.afterClosed()
  };


  toggleRow = (brand: Brand): Observable<Brand>=>{
    return this._brandService.delete(brand.id)
  }
}

