import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HeaderService, MisAsuntosService } from 'dls';

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


@Component({
  selector: 'app-mis-asuntos',
  templateUrl: './mis-asuntos.component.html',
  styleUrls: ['./mis-asuntos.component.scss']
})
export class MisAsuntosComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['folio', 'nombre', 'estatus', 'fechaRecepcion', 'fechaVencimiento', 'medioLlegada', 'diasVencimiento'];
  dataSource: MatTableDataSource<AsuntoPendiente>;
  filter: any;

  constructor(public headerService: HeaderService, public misAsuntosService: MisAsuntosService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.misAsuntosService.ASUNTOS_PENDIENTES);
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
    if (+event.value !== -1) {
      result = this.misAsuntosService.ASUNTOS_PENDIENTES.filter(asunto => {
        if (asunto.idLlegada === +event.value) {
          return asunto;
        }
      });
    } else {
      result = this.misAsuntosService.ASUNTOS_PENDIENTES;
    }
    this.dataSource = new MatTableDataSource(result);
  }

}
