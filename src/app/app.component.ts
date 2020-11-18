import { Observable } from 'rxjs';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from 'dls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Unidad Especializada';

  public load: Observable<boolean>;

  constructor(
    private loader: LoaderService,
    private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.load = this.loader.loader$;
    this.cdr.detectChanges();
  }
}
