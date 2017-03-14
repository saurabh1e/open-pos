import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import {TdMediaService} from "@covalent/core";


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {

  title: string;
  constructor(private _titleService: Title, public media: TdMediaService) { }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Dashboard' );
    this.title = this._titleService.getTitle();
    this.media.broadcast();
  }

}
