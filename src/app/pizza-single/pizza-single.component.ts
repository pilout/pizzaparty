import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaService } from '../pizza.service';
import { ActivatedRoute, Params } from '@angular/router';
import {switchMap, map, debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-pizza-single',
  templateUrl: './pizza-single.component.html',
  styleUrls: ['./pizza-single.component.scss']
})




export class PizzaSingleComponent implements OnInit {
  

  @ViewChild('toto',{static : false}) toto : ElementRef;

  ngAfterViewInit(){
    fromEvent(this.toto.nativeElement,"keyup").pipe(
       map((event :KeyboardEvent)=> event.keyCode),
       filter(key=> 13 != key),
       debounceTime(500),
       distinctUntilChanged()
    ).subscribe(key=>{
    });
  }

  constructor(private servicePizza : PizzaService, private activeroute : ActivatedRoute) { }
  pizza :Pizza;



  ngOnInit() {

     this.activeroute.params.pipe(
      switchMap((params: Params) => this.servicePizza.getPizzaById(+params['id']))
    )
    .subscribe(
      pizza => this.pizza = pizza
    );


  }





}
