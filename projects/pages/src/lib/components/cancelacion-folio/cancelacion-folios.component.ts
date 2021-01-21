import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CatalogosService, HeaderService } from 'dls';

@Component({
  selector: 'app-cancelacion-folios',
  templateUrl: './cancelacion-folios.component.html',
  styleUrls: ['./cancelacion-folios.component.scss']
})
export class CancelacionFoliosComponent implements OnInit, AfterViewInit {

  constructor(public headerService: HeaderService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Cancelación de folios';
    });
  }

  cancelar() {
    const dialogRef = this.dialog.open(ConfirmacionCancelacionDialog, {
      disableClose: true
    });
    // dialogRef.componentInstance.analista1 = this.analista1;
    // dialogRef.componentInstance.analista2 = this.analista2;
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // this.cargarExcel();
        // this.TODO_BIEN = true;
      }
    });
  }

}


@Component({
  templateUrl: './dialogs/confirmacion-cancelacion.dialog.html'
})
export class ConfirmacionCancelacionDialog {
  // analista1: string;
  // analista2: string;
  constructor(public dialogRef: MatDialogRef<ConfirmacionCancelacionDialog>) {}
}
