import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';

@Component({
    selector: 'app-pizza',
    templateUrl: './pizza.component.html'
})
export class PizzaComponent {


    constructor( private pizzaSerive : PizzaService) {}
    @Input('pizza') selectedPizza: Pizza;
    @Output() unselected: EventEmitter<any> = new EventEmitter();
    @Output() deleted: EventEmitter<any> = new EventEmitter();

    cancel() {
        // Quand une pizza est supprimé, on doit pouvoir informer le composant parent
        this.unselected.emit(this.selectedPizza);
        this.selectedPizza = null;
    }

    delete(pizza: Pizza){

        this.pizzaSerive.removePizza(pizza).then(()=>{
            this.deleted.emit(pizza)
        }
        );
    }

    onSave(pizza: Pizza){
        this.pizzaSerive.savePizza(pizza).then(()=> console.log("Pizza Sauvegardée"));
    }
}
