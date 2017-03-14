import {Component, OnInit, AfterViewInit} from '@angular/core';
import {TdMediaService} from "@covalent/core";

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.scss']
})
export class StockManagementComponent implements OnInit, AfterViewInit {

  constructor(public media: TdMediaService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.media.broadcast();
  }

}
