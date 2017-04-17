import { Component, OnInit, ViewContainerRef, OnDestroy, AfterViewInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import {PrinterConfig, PrinterConfigService, RetailShop, RetailShopsService} from "../../../services/shop.service";
import {Subscription} from "rxjs";
import {IndexDBServiceService} from "../../../services/indexdb.service";

@Component({
  selector: 'app-printer-config',
  templateUrl: './printer-config.component.html',
  styleUrls: ['./printer-config.component.scss'],
  viewProviders: [PrinterConfigService]
})
export class PrinterConfigComponent implements OnInit, OnDestroy {

  shop: RetailShop;
  shopSub: Subscription;
  printerConfig: PrinterConfig;

  constructor(private _shopService: RetailShopsService,
              private _dialogService: TdDialogService,
              private _indexDB: IndexDBServiceService,
              private _printerService: PrinterConfigService,
              private _viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    this.shop = this._shopService.shop;
    if (this.shop.id) {
      this.copyPrinterConfig();
    }
    this.shopSub = this._shopService.shop$.subscribe((data: RetailShop) => {
      this.shop = data;
      this.copyPrinterConfig();
    });

    if (!this.shop.id) {
      this._dialogService.openAlert({
        message: 'Select a Shop to edit Printer Config.',
        disableClose: false , // defaults to false
        viewContainerRef: this._viewContainerRef, //OPTIONAL
        title: 'Alert', //OPTIONAL, hides if not provided
        closeButton: 'Close', //OPTIONAL, defaults to 'CLOSE'
      });
    }
  }
  ngOnDestroy(){
    this.shopSub.unsubscribe();
  }

  save(event): void{


  }

  copyPrinterConfig() {
    this.printerConfig = Object.assign({}, this.shop.printer_config)
  }

  cancelState():void {
    this.copyPrinterConfig();
  }

  saveState(): void {
    if (this.printerConfig.id) {
      this._printerService.update(this.printerConfig.id, this.printerConfig).subscribe((data)=>{
        this.shop.printer_config = this.printerConfig;
        this._indexDB.shops.update(this.shop.id, this.shop).then(()=>{
          this._shopService.shop = this.shop;
        })
      })
    }
    else {
      this._printerService.create(this.printerConfig).subscribe((data)=>{
        this.shop.printer_config = this.printerConfig;
        this._indexDB.shops.update(this.shop.id, this.shop).then(()=>{
          this._shopService.shop = this.shop;
        })
      })
    }
  }
}
