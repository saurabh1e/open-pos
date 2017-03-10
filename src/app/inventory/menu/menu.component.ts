import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  routes: Object[] = [{
    title: 'Products',
    route: '/inventory/products',
    icon: 'P',
  }, {
    title: 'Brands',
    route: '/inventory/brands',
    icon: 'B',
  }, {
    title: 'Distributors',
    route: '/inventory/distributors',
    icon: 'D',
  }, {
    title: 'Tags',
    route: '/inventory/tags',
    icon: 'TG',
  }, {
    title: 'Taxes',
    route: '/inventory/taxes',
    icon: 'TX',
  },  {
    title: 'Salts',
    route: '/inventory/salts',
    icon: 'S',
  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
