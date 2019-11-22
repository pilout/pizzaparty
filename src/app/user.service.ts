import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, flatMap, delay } from 'rxjs/operators';
import { User } from './models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient){}

  getUsers(): Observable<User[]> {

    return this.http.get('http://localhost:3000/users').pipe(
        map(reponse=> reponse as User[])
    )


  }

  getUser(id:number) : Observable<User> {
    return this.http.get('http://localhost:3000/users/'+id).pipe(
        map(reponse=> reponse as User)
    )
   }

   searchExact(name:string) : Observable<User> {
    return this.http.get('http://localhost:3000/users?name='+name).pipe(
        delay(1500),
        map(reponse=> reponse as User)
    )
   }

  create(ingre:User): Observable<User> { 
    console.log(ingre);
    return this.http.post('http://localhost:3000/users/',ingre).pipe(
      map(reponse=> reponse as User)
    )
  }

  update(ingre:User): Observable<User> { 
    return this.http.put('http://localhost:3000/users/',ingre).pipe(
      map(reponse=> reponse as User)
    )
  }

  delete(ingre:User) { 
    return this.http.delete('http://localhost:3000/users/' + ingre.id).subscribe(()=> {
    }
    );
  }


}
