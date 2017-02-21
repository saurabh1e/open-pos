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
    icon: 'dashboard',
  }, {
    title: 'Brands',
    route: '/inventory/brands',
    icon: 'view_quilt',
  }, {
    title: 'Distributors',
    route: '/inventory/distributors',
    icon: 'receipt',
  }, {
    title: 'Tags',
    route: '/inventory/tags',
    icon: 'people',
  }, {
    title: 'Taxes',
    route: '/inventory/taxes',
    icon: 'view_module',
  },  {
    title: 'Salts',
    route: '/inventory/salts',
    icon: 'view_module',
  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
