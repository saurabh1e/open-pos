import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/carts/carts.component';
import { ShopComponent } from './dashboard/shops/shops.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'home', component: MainComponent,
    children: [
      {path: '', component: DashboardComponent,
        children: [
          {path: 'dashboard', component: ShopComponent},
          {path: 'carts',
            children: [
              {path: ':id', component: CartComponent}
              ]
          },

    ]},
      {path: 'billing/:id', component: BillingComponent}
  ]},
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
