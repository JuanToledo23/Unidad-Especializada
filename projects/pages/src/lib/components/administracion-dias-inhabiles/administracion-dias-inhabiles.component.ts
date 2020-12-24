import { Component, AfterViewInit, Injectable, Pipe, PipeTransform, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  events = [];

  viewYear: number = 2020;

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
  constructor(public sanitizer:DomSanitizer, public headerService: HeaderService) { }
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
    console.log(this.calendar);
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
          nb: colorsEvents.nb
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

    if (this.events.length > 0) {
      this.loader = true;
      this.daydetails = clone(day);
      let d1 = new Date(this.year, month, day.day).toDateString();

      for (let index = 0; index < this.events.length; index++) {
        const element = this.events[index];
        let d2 = element.start.toDateString();
        if (d2 == d1) {
          this.daydetails.events.push(element);
        }
        if (index == this.events.length - 1) {
          let self = this;
          setTimeout(() => {
            self.loader = false;
          }, 1000);
        }

      }
    }
  }
  getnbevents(day, month) {
    let nb = 0;
    let colors = []
    if (this.events.length > 0) {
      let d1 = new Date(this.year, month, day).toDateString();
      for (let index = 0; index < this.events.length; index++) {
        const element = this.events[index];
        let d2 = element.start.toDateString();
        if (d2 == d1) {
          nb++;
          colors.push(element.color.secondary)
        }
      }
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