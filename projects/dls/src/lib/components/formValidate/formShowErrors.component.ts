import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'dls-form-show-errors',
  templateUrl: './formShowErrors.component.html',
  styleUrls: ['./formShowErrors.component.scss']
})

export class FormShowErrorComponent {
// @dynamic
  static errorMessages = null;

  errorMessages = {
    required: () => 'El campo es requerido',
    minlength: (params) => 'El valor minimo de caracteres es: ' + params.requiredLength,
    maxlength: (params) => 'El valor maximo de caracteres es: ' + params.requiredLength,
    pattern: (params) => 'El patron requerido es: ' + params.requiredPattern,
    numbers: (params) => params.message,
    uniqueName: (params) => params.message,
    telephoneNumber: (params) => params.message,
    formatStrCU: (params) => params.message,
    formatEmail: (params) => params.message,
    formatText: (params) => params.message
  };

  @Input() control: AbstractControlDirective | AbstractControl;

  constructor() {}

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  getMessage(type: string, params: any) {
    return FormShowErrorComponent.errorMessages[type](params);
  }
}
