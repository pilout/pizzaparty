import { Injectable } from '@angular/core';
import { Pizza } from './models/pizza.model';
import { resolve } from 'url';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http : HttpClient){}

  getPizzas(): Promise<Pizza[]> {

    return this.http.get('http://localhost:3000/pizzas').toPromise().then(
      response => response as Pizza[]
    );


  }

  getPizzaById(id:number){
    return this.http.get('http://localhost:3000/pizzas/'+id).toPromise().then((rep)=>
      rep = rep as Pizza
    );
  }

  savePizza(pizza:Pizza): Promise<Pizza> {
    return this.http.put('http://localhost:3000/pizzas/' + pizza.id, pizza).toPromise().then(
      () => pizza
    );
  }

  create(pizza:Pizza){
    return this.http.post('http://localhost:3000/pizzas/' + pizza.id,pizza).toPromise().then(
      response => response as  Pizza
    );
  }

  removePizza(pizza:Pizza){
    return this.http.delete('http://localhost:3000/pizzas/' + pizza.id).toPromise().then(
      response => response as  Pizza
    );
  }

}
