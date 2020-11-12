import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerService } from '../../services/timer/timer.service';
import { AuthService } from 'auth';

@Component({
  selector: 'dls-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  public counter: Observable<number>;

  constructor(
    private timer: TimerService,
    private auth: AuthService ) {
    this.counter = this.timer.counter$;
    this.timer.countdownEnd$.subscribe( () => this.auth.logout() );
  }
}
