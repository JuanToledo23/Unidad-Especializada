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
  showBtnIcon = false;

  constructor(public headerService: HeaderService, public reportesService: ReportesService, private router: Router) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Reportes';
    });
  }


  cambiarFiltro(seleccion, filtroSeleccionado) {
    this.reportesService.filtros.forEach(element => {
      if(element.value === seleccion.value) {
        filtroSeleccionado.value = element.value;
        filtroSeleccionado.nombreFiltro = element.nombreFiltro;
        filtroSeleccionado.segundoParametro = element.segundoParametro;
        filtroSeleccionado.tercerParametro = element.tercerParametro;
      }
    });
    this.showBtnIcon = true;
  }

  eliminarFlitro(filtroSeleccionado) {
    if(this.reportesService.filtrosSeleccionados.length === 1) {
      this.reportesService.filtrosSeleccionados[0] = { 
        id: 0, 
        value: '',
        mostrarColumna: false,
        nombreFiltro: '',
        segundoParametro: {
            type: '',
            parametros: ''
        },
        tercerParametro: {
            type: '',
            parametros: ''
        }
    }
    this.showBtnIcon = false;
    } else {
      this.reportesService.filtrosSeleccionados.splice(this.reportesService.filtrosSeleccionados.indexOf(filtroSeleccionado), 1);
      this.showBtnIcon = true;
    }
  }

  agregarFiltro() {
    this.reportesService.filtrosSeleccionados.push(
      { 
        id: 0, 
        value: '',
        mostrarColumna: false,
        nombreFiltro: '',
        segundoParametro: {
            type: '',
            parametros: ''
        },
        tercerParametro: {
            type: '',
            parametros: ''
        }
      }
    );
  }

}