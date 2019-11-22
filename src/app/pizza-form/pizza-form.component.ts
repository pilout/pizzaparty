import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {

  pizza:Pizza = new Pizza();

  constructor(private route : ActivatedRoute , private servicePizza : PizzaService, private router : Router) { }

  save(f){
   
    this.servicePizza.create(this.pizza).then(
      () => {
        return this.router.navigate(['/pizzas']);
      }
    );

  }
 

  ngOnInit() {
    if(this.route.params['id'])
      this.servicePizza.getPizzaById(+this.route.params['id']).then((p)=> this.pizza = p);
  }

  

}
