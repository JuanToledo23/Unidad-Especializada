import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HeaderService, ReportesService } from 'dls';
import * as XLSX from 'xlsx'; 

export interface RegistroReporte {
  id: number;
  tipoSolicitud: string;
  numeroSIO: string;
  responsable: string;
  medioLlegada: string;
  casoReversado: string;
  solicitudInformacionCONDUSEF: string;
  fechaRecepcion: string;
  fechaVencimiento: string;
  unidadAtencionUsuarios: string;
  nombreCliente: string;
  nombreReclamante: string;
  calleNumero: string;
  colonia:string;
  poblacion: string;
  estado: string;
  codigoPostal: string;
  rcfCurp: string;
  telefono: string;
  correoElectronico: string;
  folioPrevioAclaraciones: string;
  estatusAclaracion: string;
  falloAclaracion: string;
  montoReclamadoAclaraciones: string;
  sucursalOrigen: string;
  unidadNegocio: string;
  tipoProductoServicio: string;
  nombreComercialProductoServicio: string;
  canalOperacion: string;
  causaInconformidad: string;
  transaccionesReclamadas: string;
  montoReclamacion: string;
  importeBonificacionCancelado: string;
  falloReclamacion: string;
  falloDictamen: string;
  motivoFallo: string;
  respuesta: string;
}

@Component({
  selector: 'app-exportar-reporte',
  templateUrl: './exportar-reporte.component.html',
  styleUrls: ['./exportar-reporte.component.scss']
})
export class ExportarReporteComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<RegistroReporte>;
  filter: any;

  fileName= 'Reporte.xlsx';

  constructor(public headerService: HeaderService, public reportesService: ReportesService, private router: Router) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.reportesService.REGISTROS_REPORTES);
    this.dataSource.sort = this.sort;

    this.reportesService.filtros.forEach(element => {
      console.log(element)
      if(element.mostrarColumna) {
        this.displayedColumns.push(element.value)
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Reportes';
    });
  }

  exportarExcel() {
    let element = document.getElementById('tabla-excel'); 
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

}