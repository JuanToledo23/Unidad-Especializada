import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService, ReportesService } from 'dls';

@Component({
  selector: 'app-reporteador',
  templateUrl: './reporteador.component.html',
  styleUrls: ['./reporteador.component.scss']
})
export class ReporteadorComponent implements OnInit, AfterViewInit {

  panelOpenState = false;

  constructor(public headerService: HeaderService, public reportesService: ReportesService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.reportesService.filtrosSeleccionados)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Reportes';
    });
  }


  cambiarFiltro(filtro) {
    console.log(filtro);
  }

}