import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ingredient } from '../models/ingredient';
import { IngredientService } from '../ingredient.service';
import { Router } from '@angular/router';
import { ingredientExist } from '../validator/ingredient-exist';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {

  ingredient : Ingredient = new Ingredient() ;
  ingredientForm : FormGroup;


  constructor(private fb:FormBuilder, private serviceIngre : IngredientService, private router : Router) {

    this.ingredientForm = fb.group({
        name: fb.control(this.ingredient.name, [Validators.required, Validators.minLength(3)],[ingredientExist(serviceIngre)]),
        price:  fb.control(this.ingredient.price, [Validators.required]),
        weight:  fb.control(this.ingredient.weight, [Validators.required])
      });

   }
  


  save(){
    this.ingredient = this.ingredientForm.value;
    this.serviceIngre.create(this.ingredient).subscribe(ing=>{ console.log(ing); this.router.navigate(['/pizzas'])});
  }

  

  ngOnInit() {
  }



}
