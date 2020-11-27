import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService, ReportesService } from 'dls';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ordenar-reporte',
  templateUrl: './ordenar-reporte.component.html',
  styleUrls: ['./ordenar-reporte.component.scss']
})
export class OrdenarReporteComponent implements OnInit, AfterViewInit {


  constructor(public headerService: HeaderService, public reportesService: ReportesService, private router: Router) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Reportes';
    });
  }

  checked = false;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.reportesService.filtros, event.previousIndex, event.currentIndex);
    console.log(this.reportesService.filtros)
  }  
}