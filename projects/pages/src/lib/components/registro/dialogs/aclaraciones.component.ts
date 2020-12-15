import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AclaracionesService } from 'dls';

export interface Aclaracion {
    folio: number;
    nombre: string;
    numeroCuenta: number;
    fallo: string;
}

@Component({
    selector: 'lista-aclaraciones',
    templateUrl: './lista-aclaraciones.dialog.html'
})
export class ListaAclaracionesDialog implements OnInit{

    constructor(public dialogRef: MatDialogRef<ListaAclaracionesDialog>, public aclaracionesService: AclaracionesService,
        public dialog: MatDialog) { }

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    displayedColumns: string[] = ['folio', 'nombre', 'numeroCuenta', 'fallo'];
    dataSource: MatTableDataSource<Aclaracion>;

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.aclaracionesService.ACLARACIONES);
    }

    abrirEstatusAclaracion(aclaracionSeleccionada) {
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(EstatusAclaracionDialog, {
            disableClose: true,
            /* width: '1200px' */
        });
        dialogRef.componentInstance.aclaracionSeleccionada = aclaracionSeleccionada;
    }
}

export interface PEDIDO_AFECTADO {
    subfolio: String, 
    pedidoAfectado: String, 
    fecha: String, 
    importe: String, 
    canalOrigen: String, 
    sucursalOrigen: String,
    canalOperacion: String, 
    fallo: String, 
    caso: String, 
    tarjetaChip: String, 
    modoEntrada: String, 
    montoReclamo: String
}

export interface BITACORA {
    rol: String, 
    nombre: String, 
    fechaOperacion: String, 
    accion: String, 
    comentario: String
}


@Component({
    selector: 'estatus-aclaracion',
    templateUrl: './estatus-aclaracion.dialog.html'
})
export class EstatusAclaracionDialog {
    aclaracionSeleccionada: any;

    constructor(public dialogRef: MatDialogRef<EstatusAclaracionDialog>,  public aclaracionesService: AclaracionesService, public dialog: MatDialog) { }

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    displayedColumnsPedidosAfectados: string[] = ['subfolio', 'pedidoAfectado', 'fecha', 'importe', 'canalOrigen', 'sucursalOrigen',
    'canalOperacion', 'fallo', 'caso', 'tarjetaChip', 'modoEntrada', 'montoReclamo'];
    dataSourcePedidosAfectados: MatTableDataSource<PEDIDO_AFECTADO>;

    @ViewChild(MatSort, { static: true }) sort2: MatSort;
    displayedColumnsBitacora: string[] = ['rol', 'nombre', 'fechaOperacion', 'accion', 'comentario'];
    dataSourceBitacora: MatTableDataSource<BITACORA>;

    ngOnInit(): void {
        this.dataSourcePedidosAfectados = new MatTableDataSource(this.aclaracionesService.PEDIDOS_AFECTADOS);
        this.dataSourceBitacora = new MatTableDataSource(this.aclaracionesService.BITACORA_REGISTRADA);
    }


    enlazarAclaracion() {
        this.dialog.closeAll();
        this.aclaracionesService.aclaracionEnlazada = this.aclaracionSeleccionada;
    }

}