import { Injectable } from '@angular/core';



export interface Customer {
  email: string;
  name: string;
  active: boolean;
  mobile_number: number;
  loyalty_points: number;
  addresses: Address[];
}

export interface Address {
  name: string;
  locality: Locality;
}

export interface Locality {
  name: string;
  city: City;
}

export interface City {
  name: string;
}

@Injectable()
export class CustomerService {

  constructor() { }

}
