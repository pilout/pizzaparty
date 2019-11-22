import { Component, OnInit, ViewChild } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { User } from '../models/user.model';
import { Ingredient } from '../models/ingredient';
import { PizzaService } from '../pizza.service'
import { MessageService } from '../message.service'
import { ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';
import { IngredientService } from '../ingredient.service';



@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styles: [`
    li:hover {
      cursor: pointer;
    }
    .selected {
      font-weight: bold;
      color: red;
    }
  `]
})
export class PizzasComponent implements OnInit {

  constructor(private route: ActivatedRoute, private messageService :MessageService, private pizzaService : PizzaService, private ingredientService: IngredientService) {

  }

  ngOnInit(): void {
  
      this.route.data.subscribe(data=>{
        this.pizzas = data.pizzas;
      })

      this.ingredientService.getIngredients().subscribe((ingredients)=>{
        this.ingredients = ingredients
      });
  }

  pizzaNomFiltre: string ="";
  pizzaPrixMiFiltre: number =0;
  pizzaPrixMaFiltre: number = 100;
  pizzaOrdreFiltre: string = "asc";

  selectedPizza: Pizza;

  // Liste de pizzas à afficher dans le composant
  pizzas: Pizza[];

  user: User = new User('Mota', 'Matthieu', '1991-11-18', '','');
  ingredients: Ingredient[];




  
  // Quand on clique sur une pizza
  onSelect(pizza: Pizza) {
    this.selectedPizza = pizza;
    this.selectedPizza.ingredients = new Array<Ingredient>();
    this.messageService.addMessage("Pizza "+ pizza.name + " séléctionnée" );
  }

  // Quand on reçoit l'événement de l'enfant
  unSelect(pizza: Pizza) {
    this.messageService.addMessage("Pizza "+ this.selectedPizza.name + " annulée ");
    this.selectedPizza = null;
  }

  delete(pizza:Pizza){
    this.messageService.addMessage("Pizza "+ this.selectedPizza.name + " annulée ");
    this.pizzaService.getPizzas().then((p)=> {this.pizzas=p });
    this.selectedPizza = null;
  }



  selectIngredient(ingredient:Ingredient){
    
    this.selectedPizza.ingredients.push(ingredient);
    this.messageService.addMessage("Ajout de l'ingredient "+ ingredient.name + " dans la pizza " + this.selectedPizza.name );

  }
  removeIngredient(ingredient :Ingredient){
    let index = this.selectedPizza.ingredients.indexOf(ingredient);
    this.selectedPizza.ingredients.splice(index,1);
    this.messageService.addMessage("Supression de l'ingredient "+ ingredient.name + " dans la pizza " + this.selectedPizza.name );
  }
  
}
