import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   let taxe = 20;
   if(args.length>0)
    taxe = args[0];

    let price : number  = value +  (taxe * value)/100;
    return price.toFixed(2) + " €";
  }

}
