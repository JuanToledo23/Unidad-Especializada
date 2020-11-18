import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[dlsExpirationDate]'
})
export class ExpirationDateDirective implements AfterViewInit {

  private new = 'bg-verde';

  private normal = 'bg-amarillo';

  private pressing = 'bg-rojo';

  private state = '';

  constructor( private el: ElementRef, private render: Renderer2 ) { }

  ngAfterViewInit(): void {
    const value: HTMLElement = this.el.nativeElement;
    if ( isNaN(parseInt( value.innerText, 10 ))) { return; }
    if ( parseInt( value.innerText, 10 ) < 10 ) { this.state = this.pressing; }
    else if ( parseInt(value.innerText, 10) >= 10 && parseInt(value.innerText, 10) < 20 ) { this.state = this.normal; }
    else { this.state = this.new; }
    this.render.addClass(this.el.nativeElement, this.state);
  }
}
