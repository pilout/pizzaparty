import { Pipe, PipeTransform } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { findSafariExecutable } from 'selenium-webdriver/safari';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Pizza[], ...args: any[]): any {

    if(!Array.isArray(value))
      return value;
    

    let finale = new Array<Pizza>();
    let name = args[0] || "";
    let priceMi = args[1] || 0;
    let priceMa = args[2] || Number.MAX_VALUE;
    let order = args[3] || "asc";
  
   
   for( let p of value){


      if(args[0].length>0 && p.name.toLowerCase().indexOf(name.toLowerCase())<0)
        continue;

      if(p.price <= priceMi)
        continue;

      if(p.price >= priceMa)
        continue;

        finale.push(p);
 

   }

      finale.sort((a,b)=> a.price > b.price?1:-1);
 
       if(order == "desc")
          finale = finale.reverse();


 
      return finale;
  }

}
