import {Component, OnInit, AfterViewInit} from '@angular/core';
import {TdMediaService} from "@covalent/core";

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit, AfterViewInit {

  constructor(public media: TdMediaService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.media.broadcast();
  }

}
