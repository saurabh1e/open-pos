import { Pipe, PipeTransform } from '@angular/core';
import {Product, Tag, Brand, Salt} from "../services/items.service";

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: Product[], args?: string): any {
    if (args) {
      let re = new RegExp(args.toLowerCase());
      return value.filter((val) => {
        if (val.name.toLowerCase().match(re)){
            return val
          }
      });
    }
    return value
  }

}

@Pipe({
  name: 'productTag'
})
export class ProductTagPipe implements PipeTransform {

  transform(value: Product[], args?: Tag[]): any {

    if (args && value && args.length) {
      return value.filter((val) => {
        let flag = true;
        for (let tag in args) {
          if (val.tags.indexOf(args[tag])<0){
            flag = false;
            return false
          }
        }
        if (flag) {
          return val;
        }

      });
    }
    return value
  }

}

@Pipe({
  name: 'productSalt'
})
export class ProductSaltPipe implements PipeTransform {

  transform(value: Product[], args?: Salt[]): any {
    if (args && value && args.length) {
      return value.filter((val) => {
        let flag = true;
        for (let salt in args) {
          console.log(salt);
          if (val.salts.indexOf(args[salt])<0){
            flag = false;
            return false
          }
        }
        if (flag) {
          return val;
        }
      });
    }
    return value
  }

}

@Pipe({
  name: 'productBrand'
})
export class ProductBrandPipe implements PipeTransform {

  transform(value: Product[], args?: number[]): any {

    if (args && value && args.length) {
      return value.filter((val) => {

        if (args.indexOf(val.brand_id) > -1){
          console.log(val.brand_id);
          return val
        }
      });
    }
    return value
  }

}


@Pipe({
  name: 'productDistributor'
})
export class ProductDistributorPipe implements PipeTransform {

  transform(value: Product[], args?: number[]): any {
    if (args && value && args.length) {
      return value.filter((val) => {
        if (args.indexOf(val.distributor_id) > -1){
          return val
        }
      });
    }
    return value
  }

}
