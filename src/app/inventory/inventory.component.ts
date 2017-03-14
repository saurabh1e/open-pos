import {Component, OnInit, AfterViewInit} from '@angular/core';
import {TdMediaService} from "@covalent/core";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, AfterViewInit{

  constructor(public media: TdMediaService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.media.broadcast();
  }

}
