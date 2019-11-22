import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { TaxPipe } from './tax.pipe';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';
import { PizzasComponent } from './pizzas/pizzas.component';
import { HomeComponent } from './home/home.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import {HttpClientModule} from '@angular/common/http';
import { PizzaService } from './pizza.service';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { AppRouteModule } from './app-routing.module';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { dropDownDirective } from './directive/dropdown.directive';
import { AuthGuard } from './AuthGuard';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent,
    MenuComponent,
    MessageComponent,
    TaxPipe,
    AgePipe,
    FilterPipe,
    PizzasComponent,
    HomeComponent,
    PizzaSingleComponent,
    PizzaFormComponent,
    IngredientFormComponent,
    RegisterComponent,
    dropDownDirective,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    HttpClientModule,
    AppRouteModule,
    ReactiveFormsModule
  ],
  providers: [PizzaService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
