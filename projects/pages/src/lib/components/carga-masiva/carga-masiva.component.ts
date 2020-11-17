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
  TODO_BIEN = true;

  handleFileInput(loadedFile) {
      const selectedFile = this.archivoExcel[0];
      selectedFile.file = loadedFile.target.files[0];
      selectedFile.estatus = true;
      selectedFile.name = loadedFile.target.files[0].name;

      this.headerService.showLoader = true;

      let reader = new FileReader();
      reader.onload = (event) => {
          let data = (event.target as FileReader).result;
          let workbook = XLSX.read(data, {
              type: "binary"
          });
          this.json_object = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {raw: false});
      }
      reader.readAsBinaryString(selectedFile.file);
      
      setTimeout(() => {
        this.headerService.showLoader = false;

        if(this.TODO_BIEN) {
          const dialogRef = this.dialog.open(CargaExitosaDialog, {
            disableClose: true
          });
          dialogRef.componentInstance.fileName = selectedFile.name;
          dialogRef.afterClosed().subscribe(result => {
            this.dialog.open(ResultadoCargaDialog, {
              disableClose: true
            }).componentInstance.json_object = this.json_object;
          });
        } else {
          const dialogRef = this.dialog.open(CargaFalloDialog, {
            disableClose: true
          });
          dialogRef.componentInstance.fileName = selectedFile.name;
          dialogRef.afterClosed().subscribe(result => {
            if(result) {
              this.handleFileInput(loadedFile);
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