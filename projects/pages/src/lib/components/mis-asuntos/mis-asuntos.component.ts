import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HeaderService } from 'projects/dls/src/public-api';

export interface AsuntoPendiente {
  id: number;
  folio: string;
  nombre: string;
  estatus: string;
  fechaRecepcion: string;
  fechaVencimiento: string;
  idLlegada: number,
  medioLlegada: string;
  diasVencimiento: string;
}

const ASUNTOS_PENDIENTES: AsuntoPendiente[] = [
  { id: 0, folio: '49879', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '1' },
  { id: 1, folio: '50146', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '3' },
  { id: 2, folio: '50154', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '3' },
  { id: 3, folio: '50508', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '5' },
  { id: 4, folio: '50538', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '10' },
  { id: 5, folio: '50676', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaVencimiento: '2020-08-12', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '12' },
  { id: 6, folio: '50700', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '20' },
  { id: 7, folio: '50716', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '20' },
  { id: 8, folio: '50817', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaVencimiento: '2020-08-25', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '20' },
  { id: 9, folio: '50820', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaVencimiento: '---', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '---' },
  { id: 0, folio: '49879', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '1' },
  { id: 1, folio: '50146', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '3' },
  { id: 2, folio: '50154', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '3' },
  { id: 3, folio: '50508', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '5' },
  { id: 4, folio: '50538', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '10' },
  { id: 5, folio: '50676', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaVencimiento: '2020-08-12', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '12' },
  { id: 6, folio: '50700', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '20' },
  { id: 7, folio: '50716', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '20' },
  { id: 8, folio: '50817', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaVencimiento: '2020-08-25', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '20' },
  { id: 9, folio: '50820', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaVencimiento: '---', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '---' },
  { id: 0, folio: '49879', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '1' },
  { id: 1, folio: '50146', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '3' },
  { id: 2, folio: '50154', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '3' },
  { id: 3, folio: '50508', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '5' },
  { id: 4, folio: '50538', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '10' },
  { id: 5, folio: '50676', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaVencimiento: '2020-08-12', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '12' },
  { id: 6, folio: '50700', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '20' },
  { id: 7, folio: '50716', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '20' },
  { id: 8, folio: '50817', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaVencimiento: '2020-08-25', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '20' },
  { id: 9, folio: '50820', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaVencimiento: '---', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '---' },
]

@Component({
  selector: 'app-mis-asuntos',
  templateUrl: './mis-asuntos.component.html',
  styleUrls: ['./mis-asuntos.component.scss']
})
export class MisAsuntosComponent implements OnInit, AfterViewInit {

  @ViewChild( MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['folio', 'nombre', 'estatus', 'fechaRecepcion', 'fechaVencimiento', 'medioLlegada', 'diasVencimiento'];
  dataSource: MatTableDataSource<AsuntoPendiente>;
  filter: any;

  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ASUNTOS_PENDIENTES);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Mis asuntos';
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  radioChange(event) {
    let result: any;
    if(+event.value !== -1){
      result = ASUNTOS_PENDIENTES.filter(asunto => {
        if(asunto.idLlegada === +event.value) {
          return asunto;
        }
      });
    } else {
      result = ASUNTOS_PENDIENTES;
    }
    this.dataSource = new MatTableDataSource(result);
}

}
