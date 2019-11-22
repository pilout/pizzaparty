import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Pizza } from '../models/pizza.model';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  @Input() ingredients: Array<Ingredient>;
  @Input() selectedPizza: Pizza;


  @Output() selected :EventEmitter<any> = new EventEmitter(); 
  @Output() unselected :EventEmitter<any> = new EventEmitter(); 

  constructor(private ingredientService : IngredientService) { }

  ngOnInit() {
  }

  onSelect(ingredient : Ingredient){
      this.selected.emit(ingredient);

  }

  delIngredient(ingredient:Ingredient){
      this.ingredients.splice(this.ingredients.indexOf(ingredient),1);
      this.ingredientService.delete(ingredient);
      
     
  }

  onRemove(ingredient : Ingredient){
    this.unselected.emit(ingredient);
  }

}
