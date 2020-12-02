import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HeaderService } from 'dls';
import * as XLSX from 'xlsx';
import { ResultadoCargaDialog } from './dialogs/resultado-carga.dialog';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.scss']
})
export class CargaMasivaComponent implements OnInit, AfterViewInit {

  panelOpenState = false;

  constructor(public headerService: HeaderService, public dialog: MatDialog) {}

  archivoExcel = [
    { id: 'file1', label: 'Selecciona archivo', name: 'ADJUNTAR ARCHIVO', estatus: false, file: null }
  ];

  loaderTitle = "Procesando el archivo...";
  json_object: any;
  TODO_BIEN = false;

  selectedFile: any;
  lodedFileGlobal: any;

  handleFileInput(loadedFile) {
    this.lodedFileGlobal = loadedFile;
      this.selectedFile = this.archivoExcel[0];
      this.selectedFile.file = this.lodedFileGlobal.target.files[0];
      this.selectedFile.estatus = true;
      this.selectedFile.name = this.lodedFileGlobal.target.files[0].name;

      let reader = new FileReader();
      reader.onload = (event) => {
          let data = (event.target as FileReader).result;
          let workbook = XLSX.read(data, {
              type: "binary"
          });
          this.json_object = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {raw: false});
      }
      reader.readAsBinaryString(this.selectedFile.file);
      
  }

  cargarExcel() {
    this.headerService.showLoader = true;
    setTimeout(() => {
      this.headerService.showLoader = false;
      if(this.TODO_BIEN) {
        const dialogRef = this.dialog.open(CargaExitosaDialog, {
          disableClose: true
        });
        dialogRef.componentInstance.fileName = this.selectedFile.name;
        dialogRef.afterClosed().subscribe(result => {
          this.dialog.open(ResultadoCargaDialog, {
            disableClose: true
          }).componentInstance.json_object = this.json_object;
        });
      } else {
        const dialogRef = this.dialog.open(CargaFalloDialog, {
          disableClose: true
        });
        dialogRef.componentInstance.fileName = this.selectedFile.name;
        dialogRef.afterClosed().subscribe(result => {
          if(result) {
            this.cargarExcel();
            this.TODO_BIEN = true;
          }
        });
      }
    }, 1000);
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Carga masiva casos';
    });
  }

}

@Component({
  templateUrl: './dialogs/carga-exitosa.dialog.html'
})
export class CargaExitosaDialog {
  fileName: string;
  constructor(public dialogRef: MatDialogRef<CargaExitosaDialog>) {}
}

@Component({
  templateUrl: './dialogs/carga-fallo.dialog.html'
})
export class CargaFalloDialog {
  fileName: string;
  constructor(public dialogRef: MatDialogRef<CargaFalloDialog>) {}
}