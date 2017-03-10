import { Injectable } from '@angular/core';
import {RESTService, HttpInterceptorService} from "@covalent/http";
import {MOCK_API} from "../config/api.config";
import {HttpService} from "./http.service";
import {stringify} from "@angular/core/src/facade/lang";
import {Observable} from "rxjs";



export interface Customer {
  id: number;
  email: string;
  name: string;
  retail_brand_id: number;
  active?: boolean;
  mobile_number: string;
  loyalty_points?: number;
  addresses?: Address[];
}

export interface Address {
  id: number;
  name?: string;
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

  constructor(private _http: HttpInterceptorService, private _httpService: HttpService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/customer',
    });
  }


  addAddress(address: Address): Observable<any> {
    return this._httpService.save('address', address);
  }

  addCustomerAddress(addressId: number, customerId: number): Observable<any>{
    return this._httpService.post('customer_address', [{__action: 'add', customer_id: customerId, address_id: addressId}])
  }
}
