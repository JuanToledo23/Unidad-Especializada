import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[expirationDate]'
})
export class ExpirationDateDirective implements OnInit {

  @Input('value') value: string;

  constructor( private el: ElementRef ) { }

  ngOnInit(): void {
    console.log('ELEMENT_REF::', (this.el.nativeElement.innerHTML));
  }

}
