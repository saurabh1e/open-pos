import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './dashboard/carts/carts.component';
import { ShopComponent } from './dashboard/shops/shops.component';
import { LoginComponent } from './login/login.component';
import {ProductComponent} from "./dashboard/product/product.component";
import {BrandComponent} from "./dashboard/brand/brand.component";
import {TagComponent} from "./dashboard/tag/tag.component";
import {TaxComponent} from "./dashboard/tax/tax.component";
import {DistributorComponent} from "./dashboard/distributor/distributor.component";
import {SaltComponent} from "./dashboard/salt/salt.component";

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'home', component: MainComponent,
    children: [
      {path: '', component: DashboardComponent,
        children: [
          {path: 'dashboard', component: ShopComponent},
          {path: 'products', component: ProductComponent},
          {path: 'products', component: BrandComponent},
          {path: 'products', component: DistributorComponent},
          {path: 'products', component: TagComponent},
          {path: 'products', component: TaxComponent},
          {path: 'products', component: SaltComponent},

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
