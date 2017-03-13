import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../services/users.service";

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})
export class StaffDetailComponent implements OnInit {

  user: IUser;
  constructor() { }

  ngOnInit() {
  }

}
