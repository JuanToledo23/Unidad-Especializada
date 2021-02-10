import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HeaderService, MisAsuntosService, ConsultaCasosService } from 'dls';

export interface Caso {
  id: number;
  folio: string;
  folioConducef: string;
  nombre: string;
  estatus: string;
  fechaRecepcion: string;
  fechaConclucion: string;
  fallo: string,
  medioLlegada: string;
}


@Component({
  selector: 'app-consulta-casos',
  templateUrl: './consulta-casos.component.html',
  styleUrls: ['./consulta-casos.component.scss']
})
export class ConsultaCasosComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['folio', 'folioConducef', 'nombre', 'medioLlegada', 'fechaRecepcion', 'estatus', 'fallo', 'fechaConclucion'];
  dataSource: MatTableDataSource<Caso>;
  filter: any;
  textoBusqueda: string = '';
  numeroResultados: number = 0;
  mostrarResultados: boolean = false;
  constructor(public headerService: HeaderService, public consultaCasosService: ConsultaCasosService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.consultaCasosService.CASOS);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Consulta de casos';
    });
  }

  applyFilter() {
    const filterValue = this.textoBusqueda;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.numeroResultados = this.dataSource.filteredData.length;
    this.mostrarResultados = true;
  }

  radioChange(event) {
    let result: any;
    if (+event.value !== -1) {
      result = this.consultaCasosService.CASOS.filter(asunto => {
        if (asunto.id === +event.value) {
          return asunto;
        }
      });
    } else {
      result = this.consultaCasosService.CASOS;
    }
    this.dataSource = new MatTableDataSource(result);
  }

}
