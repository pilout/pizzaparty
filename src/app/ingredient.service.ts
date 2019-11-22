import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from './models/ingredient';
import { Observable } from 'rxjs';
import { map, filter, flatMap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http : HttpClient){}

  getIngredients(): Observable<Ingredient[]> {

    return this.http.get('http://localhost:3000/ingredients').pipe(
        map(reponse=> reponse as Ingredient[])
    )


  }

  getIngredient(id:number) : Observable<Ingredient> {
    return this.http.get('http://localhost:3000/ingredients/'+id).pipe(
        map(reponse=> reponse as Ingredient)
    )
   }

   searchExact(name:string) : Observable<Ingredient> {
    return this.http.get('http://localhost:3000/ingredients?name='+name).pipe(
        delay(1500),
        map(reponse=> reponse as Ingredient)
    )
   }

  create(ingre:Ingredient): Observable<Ingredient> { 
    return this.http.post('http://localhost:3000/ingredients/',ingre).pipe(
      map(reponse=> reponse as Ingredient)
    )
  }

  update(ingre:Ingredient): Observable<Ingredient> { 
    return this.http.put('http://localhost:3000/ingredients/',ingre).pipe(
      map(reponse=> reponse as Ingredient)
    )
  }

  delete(ingre:Ingredient) { 
    return this.http.delete('http://localhost:3000/ingredients/' + ingre.id).subscribe(()=> {
    console.log("suppression ingredient"); 
    }
    );
  }


}
