import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormat'
})
export class TimerFormatPipe implements PipeTransform {

  private minutes;
  private seconds;

  transform(value: any): any {
    const minutes = Math.trunc(value / 60);
    const seconds = value - minutes * 60;
    this.minutes = (`0${minutes}`).substr(-2);
    this.seconds = (`0${seconds}`).substr(-2);

    return `${this.minutes} : ${this.seconds}`;
  }

}
