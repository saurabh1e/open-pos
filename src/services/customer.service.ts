import { Injectable } from '@angular/core';
import {RESTService, HttpInterceptorService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";



export interface Customer {
  id: number;
  email: string;
  name: string;
  active?: boolean;
  mobile_number: string;
  loyalty_points?: number;
  addresses?: Address[];
}

export interface Address {
  id: number;
  name: string;
  locality?: Locality;
}

export interface Locality {
  name: string;
  city?: City;
}

export interface City {
  name: string;
}

@Injectable()
export class CustomerService extends RESTService<Customer> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/customer',
    });
  }

}
