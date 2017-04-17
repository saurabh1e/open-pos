import {Component, OnDestroy, OnInit, ViewContainerRef} from "@angular/core";
import {TdDialogService} from "@covalent/core";
import {
  RegistrationDetail,
  RegistrationDetailService,
  RetailShop,
  RetailShopsService
} from "../../../services/shop.service";
import {Subscription} from "rxjs";
import {IndexDBServiceService} from "../../../services/indexdb.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  viewProviders: [RegistrationDetailService]
})
export class DetailComponent implements OnInit, OnDestroy {


  shop: RetailShop;
  shopSub: Subscription;
  regDetails: RegistrationDetail[];
  name: string;
  value: string;

  constructor(private _shopService: RetailShopsService,
              private _dialogService: TdDialogService,
              private _indexDB: IndexDBServiceService,
              private _regService: RegistrationDetailService,
              private _viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.shop = this._shopService.shop;
    if (this.shop.id) {
      this.regDetails = this.shop.registration_details;
      console.log(this.regDetails);
    }
    this.shopSub = this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
      this.regDetails = this.shop.registration_details;
      console.log(this.regDetails);
    });

    if (!this.shop.id) {
      this._dialogService.openAlert({
        message: 'Select a Shop to edit Registration Detail.',
        disableClose: false, // defaults to false
        viewContainerRef: this._viewContainerRef, //OPTIONAL
        title: 'Alert', //OPTIONAL, hides if not provided
        closeButton: 'Close', //OPTIONAL, defaults to 'CLOSE'
      });
    }
  }

  ngOnDestroy() {
    this.shopSub.unsubscribe();
  }

  save(event): void {


  }

  saveState(): void {
    this._regService.create({name: this.name, value: this.value, retail_shop_id: this.shop.id}).subscribe((data)=>{
      this.shop.registration_details.push(data.data[0]);
      this._indexDB.shops.update(this.shop.id, this.shop).then(()=>{
        this._shopService.shop = this.shop;
      })
    });
  }

  deleteRegDetail(reg: RegistrationDetail) {
    this._regService.delete(reg.id).subscribe(()=>{

      this.shop.registration_details.splice(this.shop.registration_details.indexOf(reg), 1);
      this._indexDB.shops.update(this.shop.id, this.shop).then(()=>{
        this._shopService.shop = this.shop;
      })
    })
  }
}
