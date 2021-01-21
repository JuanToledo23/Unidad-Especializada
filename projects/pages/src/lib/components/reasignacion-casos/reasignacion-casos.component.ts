import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogosService, HeaderService } from 'dls';

@Component({
  selector: 'app-reasignacion-casos',
  templateUrl: './reasignacion-casos.component.html',
  styleUrls: ['./reasignacion-casos.component.scss']
})
export class ReasignacionCasosComponent implements OnInit, AfterViewInit {

  analista1: string = 'Nombre';
  analista2: string = 'Nombre';
  constructor(public headerService: HeaderService, public catalogosService: CatalogosService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Reasignación de caso';
    });
  }

  cambiarAnalista(e, analista) {
    console.log(e)
    if (analista === 'analista1') {
      this.analista1 = e.value;
    } else {
      this.analista2 = e.value;
    }
  }

  guardar() {
    const dialogRef = this.dialog.open(ConfirmacionDialog, {
      disableClose: true
    });
    dialogRef.componentInstance.analista1 = this.analista1;
    dialogRef.componentInstance.analista2 = this.analista2;
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // this.cargarExcel();
        // this.TODO_BIEN = true;
      }
    });
  }

}


@Component({
  templateUrl: './dialogs/confirmacion.dialog.html'
})
export class ConfirmacionDialog {
  analista1: string;
  analista2: string;
  constructor(public dialogRef: MatDialogRef<ConfirmacionDialog>) {}
}
