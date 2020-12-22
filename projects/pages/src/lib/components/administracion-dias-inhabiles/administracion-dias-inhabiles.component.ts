import { Component, AfterViewInit, Injectable, Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'dls';
import * as moment from 'moment';

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
export class AdministracionDiasInhabilesComponent implements AfterViewInit {


  constructor(public headerService: HeaderService, public dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Administración de días inhábiles';
    });
    const YEARS = () => {
      const years = []
      const dateStart = moment('2016-01-01')
      const dateEnd = moment().add(10, 'y')
      while (dateEnd.diff(dateStart, 'years') >= 0) {
        years.push(dateStart.format('YYYY'))
        dateStart.add(1, 'year')
      }
      return years
    }
    console.log(YEARS())

    const MONTHS = () => {
      const months = []
      const dateStart = moment('2016-01-01')
      const dateEnd = moment('2016-01-01').add(12, 'month')
      while (dateEnd.diff(dateStart, 'months') >= 0) {
        months.push(dateStart.format('M'))
        dateStart.add(1, 'month')
      }
      return months
    }
    console.log(MONTHS())

    const DAYS = () => {
      const days = []
      const dateStart = moment('2016-02-01')
      const dateEnd = moment('2016-02-01').add(30, 'days')
      while (dateEnd.diff(dateStart, 'days') >= 0) {
        days.push(dateStart.format('D'))
        dateStart.add(1, 'days')
      }
      return days
    }
    console.log(DAYS())
  }
}  