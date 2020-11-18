import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loader: BehaviorSubject<boolean>;

  public loader$: Observable<boolean>;

  constructor() {
    this.loader = new BehaviorSubject<boolean>(false);
    this.loader$ =  this.loader.asObservable();
  }

  setLoader(state: boolean): void {
    this.loader.next(state);
  }
}
