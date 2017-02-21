import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {

  title: string;
  constructor(private _titleService: Title) { }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Dashboard' );
    this.title = this._titleService.getTitle();
  }

}
