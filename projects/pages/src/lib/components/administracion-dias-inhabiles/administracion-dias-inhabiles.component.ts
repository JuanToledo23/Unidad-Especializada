import { Component, AfterViewInit, Injectable, Pipe, PipeTransform, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderService } from 'dls';
import * as cloneDeep from "lodash/cloneDeep";
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
      primary: '#ad2121',
      secondary: '#FAE3E3'
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
  actions: any[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      name: 'delete'
    },
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      name: 'edit'
    }
  ];
  events: any = [
    {
      start: new Date(2021, 0, 7),
      end: new Date(2021, 0, 10),
      title: 'title event 1',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: new Date(2021, 0, 8),
      end: new Date(2021, 0, 10),
      title: 'title event 1',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: new Date(2021, 0, 9),
      end: new Date(2021, 0, 10),
      title: 'title event 1',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: new Date(2021, 0, 10),
      end: new Date(2021, 0, 10),
      title: 'title event 1',
      color: this.colors.red,
      actions: this.actions
    },
    {
      start: new Date(2021, 11, 20),
      end: new Date(2021, 11, 20),
      title: 'title event 2',
      color: this.colors.yellow,
      actions: this.actions
    }
  ]

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
  constructor(public sanitizer:DomSanitizer, public headerService: HeaderService, public dialog: MatDialog) { }
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
          status: false
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
    // this.events.push(
    //   {
    //     start: new Date(),
    //     end: new Date(),
    //     title: 'title event 1',
    //     color: '',
    //     actions: ''
    //   }
    // );
    if (this.events.length > 0) {
      this.loader = true;
      this.daydetails = clone(day);
      // console.log(new Date(this.year, month, day.day))
      let d1 = new Date(this.year, month, day.day).toDateString();
      console.log(d1);
      for (let index = 0; index < this.events.length; index++) {
        const element = this.events[index];
        let d2 = element.start.toDateString();
        if (d2 == d1) {
          this.daydetails.events.push(element);
          console.log(element.end)
        }
        if (index == this.events.length - 1) {
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
    if (this.events.length > 0) {

      let d1 = +new Date(this.year, month, day).toISOString().substr(0, 10).replace('-', '').replace('-', '');
      // console.log(+new Date(this.year, month, day).toISOString().substr(0, 10).replace('-', '').replace('-', ''))
      for (let index = 0; index < this.events.length; index++) {
        const element = this.events[index];
        let d2 = +element.start.toISOString().substr(0, 10).replace('-', '').replace('-', '');
        if (d2 == d1) {
          nb++;
          colors.push(element.color.secondary);
          // console.log(element.start);
          // console.log(element.end);

          // if(element.start != element.end) {
          //   console.log(element.end);
          // }

          // if(d1 < +element.end.toISOString().substr(0, 10).replace('-', '').replace('-', '')) {
          //   console.log(+element.end.toISOString().substr(0, 10).replace('-', '').replace('-', ''));
          //   colors.push('#00aaff');
          // }
        }
      }
      // console.log(colors)
      return ({ nb: nb, color: colors.toString() })
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
    return this.meses[date.getMonth()]
  }  
}  


@Component({
  templateUrl: './dialogs/habilitar-deshabilitar-dias.dialog.html',
  styleUrls: ['./dialogs/habilitar-deshabilitar-dias.dialog.scss']
})
export class HabilitarDeshabilitarDiasDialog {
  days: any = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
  campaignOne: FormGroup;
  dialogMonth: any;
  constructor(public dialogRef: MatDialogRef<HabilitarDeshabilitarDiasDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogMonth = this.data.dialogMonth;
    console.log(this.dialogMonth);
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });
  }
  
  activarStatus(info) {
    console.log(info)
  }
  
}