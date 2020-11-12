import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CasoService } from 'dls';
import { ListaAclaracionesDialog } from '../dialogs/aclaraciones.component';

@Component({
  selector: 'origen-reclamacion',
  templateUrl: './origen-reclamacion.html'
})
export class OrigenReclamacionForm {
  constructor() { }
}

@Component({
  selector: 'datos-generales-cliente',
  templateUrl: './datos-generales-cliente.html'
})
export class DatosGeneralesClienteForm { }

@Component({
  selector: 'antecedentes-aclaraciones',
  templateUrl: './antecedentes-aclaraciones.html'
})
export class AntecedentesAclaracionesForm {
  constructor(public casoService: CasoService, public dialog: MatDialog) {}

  consultarAclaraciones() {
    const dialogRef = this.dialog.open(ListaAclaracionesDialog, {
      disableClose: true
    });
    // dialogRef.afterClosed().subscribe(result => {
    // });
  }

}

@Component({
  selector: 'descripcion-problema',
  templateUrl: './descripcion-problema.html'
})
export class DescripcionProblemaForm {
  constructor(public casoService: CasoService) {}
}
