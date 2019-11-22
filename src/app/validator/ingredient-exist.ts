import { ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { IngredientService } from '../ingredient.service';
import { Ingredient } from '../models/ingredient';
import { map } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

export function ingredientExist(serviceIngredient: IngredientService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    let name = control.value;
   
    return serviceIngredient.searchExact(name).pipe( map(reponse=> reponse as Ingredient));
    
   
  };
}

export function checkUser(serviceU: UserService) : AsyncValidatorFn
{
  return (control: AbstractControl) => {
    let name = control.value;
   
    return serviceU.searchExact(name).pipe( map(reponse=> reponse as User));
    
   
  };
}