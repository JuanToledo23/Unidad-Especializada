import { Component } from '@angular/core';
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
export class DescripcionProblemaForm {
  constructor(public casoService: CasoService) {
    console.log(casoService.reclamos)
  }

  agregarCausa() {
    this.casoService.reclamos.push({
        id: this.casoService.reclamos.length, numeroReclamacion: '' + (this.casoService.reclamos.length + 1), descripcion: 'Reclamación' + this.casoService.reclamos.length + 1, seleccionTipoBusqueda: null, busquedaPor: {
            numeroTarjeta: {
                estatus: false, segundoParametro: false
            },
            numeroCuenta: {
                estatus: false, segundoParametro: false
            },
            clienteUnico: {
                estatus: false, segundoParametro: false
            }
        },
        btnEliminar: true,
        btnLimpiar: true,
        btnAnadir: true
    })

    this.validacion()
  }

  eliminarCausa(reclamo) {
    let i = this.casoService.reclamos.indexOf(reclamo);
    this.casoService.reclamos.splice(i, 1);
    this.validacion()
  }

  validacion() {
    this.casoService.reclamos.forEach(element => {
      element.btnEliminar = true;
      element.btnLimpiar = true;
      element.btnAnadir = true;
    });

    if(this.casoService.reclamos.length === 1) {
      this.casoService.reclamos[0].btnEliminar = false;
    }

    if(this.casoService.reclamos.length > 1) {
      this.casoService.reclamos[0].btnEliminar = true;

      this.casoService.reclamos.forEach(element => {
        element.btnAnadir = false;
      });
      
      this.casoService.reclamos[this.casoService.reclamos.length - 1].btnAnadir = true;
    }
  }
}
