import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[expirationDate]'
})
export class ExpirationDateDirective implements AfterViewInit {

  private new: string = 'bg-verde';

  private normal: string = 'bg-amarillo';

  private pressing: string = 'bg-rojo';

  private state: string = '';

  constructor( private el: ElementRef, private render: Renderer2 ) { }
  
  ngAfterViewInit(): void {
    const value: HTMLElement = this.el.nativeElement;
    if( isNaN(parseInt(value.innerText))) { return }
    if( parseInt(value.innerText) < 10 )
    { this.state = this.pressing; }
    else if( parseInt(value.innerText) >= 10 && parseInt(value.innerText) < 20 )
    { this.state = this.normal; } 
    else 
    { this.state = this.new; }
    this.render.addClass(this.el.nativeElement, this.state);
  }
}
