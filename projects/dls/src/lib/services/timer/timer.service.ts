import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  init: number;

  paused: boolean;

  complete: boolean;

  countdownEnd$: Observable<void>;

  counter$: Observable<number>;

  private countdownTimerRef: any;

  private countdownEndSource: Subject<void>;

  private counterSource: BehaviorSubject<number>;

  constructor() {
    this.init = 10 * 60;
    this.paused = true;
    this.complete = false;
    this.countdownTimerRef = null;

    this.counterSource = new BehaviorSubject<number>(0);
    this.counter$ = this.counterSource.asObservable();
    this.countdownEndSource = new Subject<void>();
    this.countdownEnd$ = this.countdownEndSource.asObservable();
  }

  destructor(): void {
    this.clearTimeout();
  }

  restartCountdown(init?: number) {
    if (init) {
      this.init = init;
    }

    if (this.init && this.init > 0) {
      this.complete = false;
      this.paused = true;
      this.clearTimeout();
      this.counterSource.next( this.init );
    } else {
      this.counterSource.next( 0 );
    }
  }

  toogleCountdown(): void {
    this.paused = !this.paused;
    if (!this.paused) {
      this.doCountdown();
    } else {
      this.clearTimeout();
    }
  }

  doCountdown(): void {
    this.countdownTimerRef = setTimeout(() => {
      this.counterSource.next( this.counterSource.getValue() - 1 );
      this.processCountdown();
    }, 1000);
  }

  clearTimeout(): void {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  processCountdown(): void {
    if (this.counterSource.getValue() <= 0) {
      this.countdownEndSource.next();
      this.paused = true;
      this.complete = true;
    } else {
      this.doCountdown();
    }
  }
}
