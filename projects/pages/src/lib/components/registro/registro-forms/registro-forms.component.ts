import { FormGroup } from '@angular/forms';
import { ListaAclaracionesDialogComponent } from './../dialogs/aclaraciones.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AclaracionesService, CasoService } from 'dls';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'pages-origen-reclamacion',
  templateUrl: './origen-reclamacion.html'
})
export class OrigenReclamacionFormComponent {
  @Input() form: FormGroup;
  @Input() catalogues: any;

  settotalDaysCare( a: MatSelectChange ) {
    const y = this.catalogues.arrivalMeans.find( (x: any) => x.key === a.value );
    this.form.get('OriginOfClaim').get('totalCareDays').setValue(y.data)
  }
}

@Component({
  selector: 'pages-datos-generales-cliente',
  templateUrl: './datos-generales-cliente.html'
})
export class DatosGeneralesClienteFormComponent {
  @Input() form: FormGroup;
  @Input() catalogues: any;
}

@Component({
  selector: 'pages-antecedentes-aclaraciones',
  templateUrl: './antecedentes-aclaraciones.html'
})
export class AntecedentesAclaracionesFormComponent {
  @Input() form: FormGroup;
  @Input() catalogues: any;

  constructor(
    public casoService: CasoService,
    public dialog: MatDialog,
    public aclaracionesService: AclaracionesService ) {}

  consultarAclaraciones() {
    this.dialog.open( ListaAclaracionesDialogComponent, { disableClose: true } );
  }
}

@Component({
  selector: 'pages-descripcion-problema',
  templateUrl: './descripcion-problema.html'
})
export class DescripcionProblemaFormComponent {
  @Input() form: FormGroup;
  @Input() catalogues: any;

  constructor( public casoService: CasoService ) {}

  agregarCausa() {
    this.casoService.reclamos.push({
        id: this.casoService.reclamos.length,
        numeroReclamacion: '' + (this.casoService.reclamos.length + 1),
        descripcion: 'Reclamación' + this.casoService.reclamos.length + 1,
        seleccionTipoBusqueda: null,
        busquedaPor: {
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
    });

    this.validacion();
  }

  eliminarCausa(reclamo) {
    const i = this.casoService.reclamos.indexOf(reclamo);
    this.casoService.reclamos.splice(i, 1);
    this.validacion();
  }

  validacion() {
    this.casoService.reclamos.forEach(element => {
      element.btnEliminar = true;
      element.btnLimpiar = true;
      element.btnAnadir = true;
    });

    if (this.casoService.reclamos.length === 1) {
      this.casoService.reclamos[0].btnEliminar = false;
    }

    if (this.casoService.reclamos.length > 1) {
      this.casoService.reclamos[0].btnEliminar = true;

      this.casoService.reclamos.forEach(element => {
        element.btnAnadir = false;
      });

      this.casoService.reclamos[this.casoService.reclamos.length - 1].btnAnadir = true;
    }
  }
}
