import { Directive, HostBinding, HostListener, Optional, ElementRef } from "@angular/core";
import { NgControl } from '@angular/forms';

@Directive({
  selector: '.dropdown'
})
export class dropDownDirective {
  @HostBinding('style.color') color: string = 'blue';

  @HostListener('click')
  listen() {
      let elementMenu = this.element.nativeElement.getElementsByClassName("dropdown-menu")[0];
      console.log(elementMenu);
      if(elementMenu.classList.contains('show'))
        elementMenu.classList.remove('show');
      else
        elementMenu.classList.add('show');
  }

  // On peut récupérer le ngModel (Si c'est un champ ou un formulaire)
  // On peut définir le service comme optionnel au cas où la directive
  // n'est pas utilisée sur un ngModel ou un ngForm
  constructor(private element: ElementRef) {}


}