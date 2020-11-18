import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from 'dls';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'pages-component',
  template: `
    <dls-loader *ngIf="load | async"></dls-loader>
    <dls-timer></dls-timer>
    <dls-header></dls-header>
    <router-outlet></router-outlet>
    <dls-footer></dls-footer>
  `
})
export class PagesComponent implements OnInit, OnDestroy {

  public load: Observable<boolean>;

  constructor(
    private loader: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.load = this.loader.loader$;
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {}
}
