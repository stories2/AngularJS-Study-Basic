import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextBlue]'
})
export class TextBlueDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }

}
