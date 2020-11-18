import { Observable } from 'rxjs';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'auth-auth',
  template: `
    <auth-loader  *ngIf="load | async"></auth-loader>
    <router-outlet></router-outlet>`,
})
export class AuthComponent implements OnInit{
  public load: Observable<boolean>;

  constructor(
    private loader: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.load = this.loader.loader$;
    this.cdr.detectChanges();
  }
}
