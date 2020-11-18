import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpirationDateDirective } from './expiration-date/expiration-date.directive';

@NgModule({
  declarations: [
    ExpirationDateDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpirationDateDirective
  ]
})
export class DirectiveModule { }
