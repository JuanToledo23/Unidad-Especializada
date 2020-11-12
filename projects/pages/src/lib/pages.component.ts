import { Component } from '@angular/core';

@Component({
  selector: 'pages-component',
  template: `
    <dls-timer></dls-timer>
    <app-header></app-header>
    <router-outlet></router-outlet>
    <une-footer></une-footer>
  `
})
export class PagesComponent {
}
