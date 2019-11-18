import { Component } from '@angular/core';

export class Pizza {
  id: number;
  name: string;
  price: number;
  image?: string;
}

const PIZZAS : Pizza[] = [
  { id: 1, name: 'Reine', price: 12 },
  { id: 2, name: '4 fromages', price: 13 },
  { id: 3, name: 'Orientale', price: 11 },
  { id: 4, name: 'Cannibale', price: 9 }
];

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html"
})
export class AppComponent {
  title = 'Mon super site avec Angular';
  pizza: Pizza = {
    id: 1,
    name: 'Reine',
    price: 12,
    image: "/assets/img/reine.jpg"
  };
  pizzas :Pizza[] = PIZZAS;
}