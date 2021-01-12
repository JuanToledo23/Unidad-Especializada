import { Component, AfterViewInit, Pipe, PipeTransform, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderService } from 'dls';
import * as cloneDeep from "lodash/cloneDeep";
import { CalendarioService } from 'projects/dls/src/lib/services/calendario.service';
import { Subject } from 'rxjs';
import { DateAdapter } from 'saturn-datepicker';

const clone: cloneDeep = (<any>cloneDeep).default || cloneDeep

interface Catalogo {
  value: string;
  viewValue: string;
  show: boolean;
}
@Component({
  selector: 'app-administracion-dias-inhabiles',
  templateUrl: './administracion-dias-inhabiles.component.html',
  styleUrls: ['./administracion-dias-inhabiles.component.scss']
})
export class AdministracionDiasInhabilesComponent implements AfterViewInit, OnInit {

  colors: any = {
    red: {
      primary: '#fbbdb8',
      secondary: '#fbbdb8'
  },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

  viewYear: number = 2021;

  dialogMonth: any;

  viewDate: Date = new Date(this.viewYear + '-01-01T00:00:00');

  @Output()
  eventClicked = new EventEmitter<any>();
  
  @Output()
  actionClicked = new EventEmitter<any>();

  loader: any = false;
  days: any = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
  dayindex: any;
  daydetails: any = {};
  year: any = new Date().getFullYear();
  calendar: any = [];
  spinner: any = true;
  constructor(public sanitizer:DomSanitizer, public headerService: HeaderService, public dialog: MatDialog, public calendarioService: CalendarioService) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Administración de días inhábiles';
    });
  }
  ngOnInit() {
    this.initCalendar(this.viewDate);
  }
  ngOnChanges() {
    this.initCalendar(this.viewDate);
  }
  initCalendar(date) {
    this.year = date.getFullYear();
    this.calendar = [];
    this.spinner = true;
    for (let index = 0; index < 12; index++) {
      this.calendar.push({
        date: new Date(this.year, index + 1, 0),
        days: this.generateCalendar(index + 1, this.year)
      });
    }
    let self = this;
    setTimeout(() => {
      self.spinner = false;
    }, 2000);
    // console.log(this.calendar);
  }
  generateCalendar(month, year) {

    let monthList = [];
    let nbweeks = this.getNbWeeks(month, year);
    let dayone = this.getDay2(new Date(year, month - 1, 1));
    // let dayone = new Date(year, month - 1, 1).getDay();
    let nbdaysMonth = new Date(year, month, 0).getDate();
    let lastdayindex = this.getDay2(new Date(year, month - 1, nbdaysMonth));
    // let lastdayindex = new Date(year, month - 1, nbdaysMonth).getDay();
    let lastday = 7;
    let day = 1;
    let today = new Date().toDateString();
    for (let indexweek = 0; indexweek < nbweeks; indexweek++) {
      monthList[indexweek] = [];
      if (nbweeks == indexweek + 1) {
        lastday = lastdayindex + 1;
      }
      if (indexweek > 0) {
        dayone = 0;
      }
      for (let indexday = dayone; indexday < lastday; indexday++) {
        let d1 = new Date(year, month - 1, day).toDateString();
        let istoday = d1 == today;
        let colorsEvents = this.getnbevents(day, month - 1)
        monthList[indexweek][indexday] = {
          day: day,
          istoday: istoday,
          colors: colorsEvents.color,
          events: [],
          nb: colorsEvents.nb,
          status: colorsEvents.stat,
          motivo: colorsEvents.motivo
        };
        day++;
      }
    }
    return monthList;
  }
  getDay2(date){
    let day = date.getDay() - 1;
    if(day === -1) {
      day = 6;
    }
    return day;
  }
  getNbWeeks(month, year) {
    let dayone = this.getDay2(new Date(year, month - 1, 1));
    // let dayone = new Date(year, month - 1, 1).getDay();
    let nbdaysMonth = new Date(year, month, 0).getDate();
    let lastday = this.getDay2(new Date(year, month - 1, nbdaysMonth));;
    // let lastday = new Date(year, month - 1, nbdaysMonth).getDay();
    return (nbdaysMonth + dayone + (6 - lastday)) / 7;
  }
  getTodayEvents(day, month) {
    this.daydetails = {}
    // this.calendarioService.events.push(
    //   {
    //     start: new Date(),
    //     end: new Date(),
    //     title: 'title event 1',
    //     color: '',
    //     actions: ''
    //   }
    // );
    if (this.calendarioService.events.length > 0) {
      this.loader = true;
      this.daydetails = clone(day);
      // console.log(new Date(this.year, month, day.day))
      let d1 = new Date(this.year, month, day.day).toDateString();
      console.log(d1);
      for (let index = 0; index < this.calendarioService.events.length; index++) {
        console.log(this.calendarioService.events[index])
        const element = this.calendarioService.events[index];
        let d2 = element.start.toDateString();
        if (d2 == d1) {
          this.daydetails.events.push(element);
        }
        if (index == this.calendarioService.events.length - 1) {
          let self = this;
          setTimeout(() => {
            self.loader = false;
          }, 1000);
        }
      }
    }
    // console.log(this.daydetails);
  }
  getnbevents(day, month) {
    let nb = 0;
    let colors = []
    let status;
    let motivo;
    if (this.calendarioService.events.length > 0) {

      let d1 = +new Date(this.year, month, day).toISOString().substr(0, 10).replace('-', '').replace('-', '');
      for (let index = 0; index < this.calendarioService.events.length; index++) {
        const element = this.calendarioService.events[index];
        let d2 = +element.start.toISOString().substr(0, 10).replace('-', '').replace('-', '');
        if (d2 == d1) {
          nb++;
          colors.push(element.color.secondary);
          status = this.calendarioService.events[index].status
          motivo = this.calendarioService.events[index].motivo
        }
      }

      return ({ nb: nb, color: colors.toString(), stat: status, motivo: motivo })
    } else {
      return { color: "", nb: 0 }
    }
  }
  eventClickedFn(event) {
    this.eventClicked.emit(event);
  }
  refresh(date) {
    this.initCalendar(date);
  }
  actionClickedFn(action,event?){
    this.actionClicked.emit({action:action,event:event})
  }
  
  adelante() {
    this.viewYear++;
    this.refresh(new Date(this.viewYear + '-01-01T00:00:00'));
  }
  atras() {
    this.viewYear--;
    this.refresh(new Date(this.viewYear + '-01-01T00:00:00'));
  }
  showDialog(m) {
    this.dialogMonth = m;
    console.log(this.dialogMonth)
    const dialogRef = this.dialog.open(HabilitarDeshabilitarDiasDialog, {
      disableClose: true,
      data: {
        dialogMonth: this.dialogMonth
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.calendarioService.fechas.forEach(element => {
        this.calendarioService.events.push({
          start: new Date(element),
          end: new Date(element),
          title: 'title event 1',
          color: this.colors.red,
          actions: '',
          motivo: this.calendarioService.motivo,
          status: true
      })
      });
      console.log(this.calendarioService.events);
      this.refresh(this.viewDate);
      // if(result) {
      // }
    });
    
  }
}

@Pipe({  
  name: 'nombreMes',  
  pure: false  
})  
export class NombreMesPipe implements PipeTransform {  
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  transform(date: any): any {
    return this.meses[date]
  }  
}  

@Component({
  templateUrl: './dialogs/habilitar-deshabilitar-dias.dialog.html',
  styleUrls: ['./dialogs/habilitar-deshabilitar-dias.dialog.scss']
})
export class HabilitarDeshabilitarDiasDialog implements AfterViewInit{
  private _destroyed = new Subject<void>();
  days: any = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
  month: number = 0;
  inlineRange;
  dias: any;
  startDate = new Date(2021, 1, 1);
  constructor(public dialogRef: MatDialogRef<HabilitarDeshabilitarDiasDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private dateAdapter: DateAdapter<Date>, public calendarioService: CalendarioService) {
    this.dateAdapter.setLocale('mx');
    this.dateAdapter.getFirstDayOfWeek = () => { return 1; }
    this.dateAdapter.getDayOfWeekNames = () => ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
    this.month = this.data.dialogMonth.date.getMonth()
    console.log(this.month)
    this.startDate = new Date(this.data.dialogMonth.date);
  }

  ngAfterViewInit(){
    document.getElementsByClassName('mat-calendar-next-button')[0].addEventListener('click', () => {
      if(this.month === 11) {
        this.month = 0;
      } else {
        this.month++;
      }
    });

    document.getElementsByClassName('mat-calendar-previous-button')[0].addEventListener('click', () => {
      if (this.month === 0) {
        this.month = 11
      } else {
        this.month--;
      }
    });
  }
  
  activarStatus(info) {
    console.log(info)
  }
  inlineRangeChange($event) {
    console.log($event)
    this.inlineRange = $event;
  }

  guardarDias() {
    this.dias = this.getDates(new Date(this.inlineRange.begin), new Date(this.inlineRange.end))
    console.log(this.dias);
    this.calendarioService.fechas = this.dias;
  }

  getDates(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  };
}