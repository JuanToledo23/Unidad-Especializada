import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AclaracionesService, CasoService } from 'dls';
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
  constructor(public casoService: CasoService, public dialog: MatDialog, public aclaracionesService: AclaracionesService) {}

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
export class DescripcionProblemaForm implements OnInit{
  constructor(public casoService: CasoService) {
  }

  ngOnInit(): void {
    this.casoService.validacion();
  }

}
