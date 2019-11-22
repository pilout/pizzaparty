import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Pizza } from './models/pizza.model';
import { Observable } from 'rxjs';
import { PizzaService } from './pizza.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaResolverService implements Resolve<Pizza[]> {

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Promise<Pizza[]>  {
   return this.pizzaService.getPizzas();
}



  constructor(private pizzaService : PizzaService) { }
}
