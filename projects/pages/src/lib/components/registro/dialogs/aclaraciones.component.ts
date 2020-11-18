import { LoaderService } from 'dls';
import { PEdidiosAfectado, Bitacora } from 'dls';
import { ResponseClarificationsGeneral, ClarificationInfo } from 'dls';
import { RegistryService } from 'core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AclaracionesService } from 'dls';

export interface Clarification {
  clarificationId: string;
  name: string;
  accountNumber: string;
  opinion: string;
  clarification?: any;
}

@Component({
  selector: 'pages-lista-aclaraciones',
  templateUrl: './lista-aclaraciones.dialog.html'
})
export class ListaAclaracionesDialogComponent implements OnInit {

  constructor(
    private loader: LoaderService,
    public dialogRef: MatDialogRef<ListaAclaracionesDialogComponent>,
    public aclaracionesService: AclaracionesService,
    private registryService: RegistryService,
    public dialog: MatDialog) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['folio', 'nombre', 'numeroCuenta', 'fallo'];

  dataSource: MatTableDataSource<Clarification>;

  ngOnInit(): void {
    this.aclaracionesService.clarifications$.subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    });
    // this.dataSource = new MatTableDataSource(ACLARACIONES);
  }

  abrirEstatusAclaracion(aclaracionSeleccionada) {
    console.log(aclaracionSeleccionada);
    this.loader.setLoader(true);
    this.registryService.getClarificationDetail(aclaracionSeleccionada.clarificationId).subscribe(
      (detail: ResponseClarificationsGeneral) => {
        this.aclaracionesService.setClarificationDetail(detail);
        this.loader.setLoader(false);
      });
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(EstatusAclaracionDialogComponent, {
      disableClose: true
    });
    dialogRef.componentInstance.aclaracionSeleccionada = aclaracionSeleccionada;
  }
}

export interface PedidoAfectado {
  subfolio: string;
  pedidoAfectado: string;
  fecha: string;
  importe: string;
  canalOrigen: string;
  sucursalOrigen: string;
  canalOperacion: string;
  fallo: string;
  caso: string;
  tarjetaChip: string;
  modoEntrada: string;
  montoReclamo: string;
}

export interface BITACORA {
  rol: string;
  nombre: string;
  fechaOperacion: string;
  accion: string;
  comentario: string;
}


@Component({
  selector: 'pages-estatus-aclaracion',
  templateUrl: './estatus-aclaracion.dialog.html'
})
export class EstatusAclaracionDialogComponent implements OnInit {
  aclaracionSeleccionada: any;

  responseInfo: ClarificationInfo;

  constructor(
    private loader: LoaderService,
    public dialogRef: MatDialogRef<EstatusAclaracionDialogComponent>,
    public aclaracionesService: AclaracionesService,
    public dialog: MatDialog) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumnsPedidosAfectados: string[] = [
    'subfolio',
    'pedidoAfectado',
    'fecha',
    'importe',
    'canalOrigen',
    'sucursalOrigen',
    'canalOperacion',
    'fallo',
    'caso',
    'tarjetaChip',
    'modoEntrada',
    'montoReclamo'
  ];

  dataSourcePedidosAfectados: MatTableDataSource<PEdidiosAfectado>;

  @ViewChild(MatSort, { static: true }) sort2: MatSort;

  displayedColumnsBitacora: string[] = [
    'rol',
    'nombre',
    'fechaOperacion',
    'accion',
    'comentario'];

  dataSourceBitacora: MatTableDataSource<Bitacora>;

  ngOnInit(): void {
    this.loader.setLoader(true);
    this.aclaracionesService.clarificationDetail$.subscribe(
      (response: ResponseClarificationsGeneral) => {
        this.responseInfo = response.respuesta.responseInfo;
        console.log('DETAILS', response);
        this.dataSourcePedidosAfectados = new MatTableDataSource(response.respuesta.responseInfo.affectedOrders);
        this.dataSourceBitacora = new MatTableDataSource(response.respuesta.responseInfo.binnacle);
        this.loader.setLoader(false);
      });
    // this.dataSourcePedidosAfectados = new MatTableDataSource(this.aclaracionesService.PEDIDOS_AFECTADOS);
    // this.dataSourceBitacora = new MatTableDataSource(this.aclaracionesService.BITACORA_REGISTRADA);
  }

  enlazarAclaracion() {
    this.dialog.closeAll();

    const CLARIFICATIONBINDER = {
      clarificationId: this.responseInfo.header.clarificationId + '',
      opinion: this.responseInfo.header.opinion,
      status: this.responseInfo.header.status,
      reclaimedAmount: this.responseInfo.clarificationData.reclaimedAmount
    }

    this.aclaracionesService.setClarificationBinded(CLARIFICATIONBINDER);
  }

}
