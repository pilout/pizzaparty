import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { PizzasComponent } from './pizzas/pizzas.component';
import { HomeComponent } from './home/home.component';
import { PizzaResolverService } from './pizza-resolver.service';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './AuthGuard';



@NgModule({
    imports :[
        RouterModule.forRoot([
            {path:'', component: HomeComponent},
            {
              path:'pizzas', 
              component: PizzasComponent, 
              resolve:{pizzas: PizzaResolverService}
            },
            {path:'register', component: RegisterComponent},
            {path:'login', component: RegisterComponent},
            {path:'pizzas/create', component: PizzaFormComponent , canActivate : [AuthGuard]},
            {path:'pizzas/:id', component: PizzaSingleComponent},
            {path:'ingredient/create', component: IngredientFormComponent, canActivate : [AuthGuard]}
        ])
    ],
    exports : [RouterModule]

})

export class AppRouteModule{};