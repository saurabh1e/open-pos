import { Pipe, PipeTransform } from '@angular/core';
import {Product, Tag, Brand} from "../services/items.service";

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
        args.forEach((tag)=>{
            if (val.tags.indexOf(tag) < 0){
              return false
            }
        });

        return val;

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
