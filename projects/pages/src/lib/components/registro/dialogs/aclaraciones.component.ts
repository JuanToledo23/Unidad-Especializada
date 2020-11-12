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
        console.log(aclaracionSeleccionada);
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(EstatusAclaracionDialog, {
            disableClose: true,
            width: '1200px'
        });
        dialogRef.componentInstance.aclaracionSeleccionada = aclaracionSeleccionada;
    }
}


@Component({
    selector: 'estatus-aclaracion',
    templateUrl: './estatus-aclaracion.dialog.html'
})
export class EstatusAclaracionDialog {
    aclaracionSeleccionada: any;
    constructor(public dialogRef: MatDialogRef<EstatusAclaracionDialog>) { }

}