import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface RegistroCargaMasiva {
    id: number;
    folioInternoAsociado: string;
    fechaRecepcion: string;
    unidadCondusef: string;
    analista: string;
    observaciones: string;
    estatus: boolean;

}

@Component({
    templateUrl: './resultado-carga.dialog.html'
})
export class ResultadoCargaDialog implements OnInit{
    constructor(public dialogRef: MatDialogRef<ResultadoCargaDialog>) {}

    json_object: any;
    REGISTROS_CARGA_MASIVA: RegistroCargaMasiva[];

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    displayedColumns: string[] = ['folioInternoAsociado', 'fechaRecepcion', 'unidadCondusef', 'analista', 'observaciones', 'estatus'];
    dataSource: MatTableDataSource<RegistroCargaMasiva>;

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource(this.REGISTROS_CARGA_MASIVA);
        console.log(this.json_object)
        this.json_object.forEach(element => {
            let estatus = null;
            if(element['Estatus'].charCodeAt(0) === 10003) {
                estatus = true;
            } else if(element['Estatus'].charCodeAt(0) === 88) {
                estatus = false;
            }
            this.dataSource.data.push(
                {
                    id: this.dataSource.data.length + 1, 
                    folioInternoAsociado: element['Folio interno asignado'],
                    fechaRecepcion: element['Fecha de recepción'],
                    unidadCondusef: element['Unidad CONDUSEF'],
                    analista: element['Analista'],
                    observaciones: element['Observaciones'],
                    estatus: estatus
                }
            );
        });
    }
}