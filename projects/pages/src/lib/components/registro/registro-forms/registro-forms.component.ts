import { Component } from '@angular/core';

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
  selector: 'datos-financieros',
  templateUrl: './datos-financieros.html'
})
export class DatosFinancierosForm { }

@Component({
  selector: 'antecedentes-aclaraciones',
  templateUrl: './antecedentes-aclaraciones.html'
})
export class AntecedentesAclaracionesForm {
  montoReclamado = ''
}

@Component({
  selector: 'descripcion-problema',
  templateUrl: './descripcion-problema.html'
})
export class DescripcionProblemaForm {

  reclamos = [
    {
      id: 0, numeroReclamacion: '1', descripcion: 'Reclamación 1', seleccionTipoBusqueda: null, busquedaPor: {
        numeroTarjeta: {
          estatus: false, segundoParametro: false
        },
        numeroCuenta: {
          estatus: false, segundoParametro: false
        },
        clienteUnico: {
          estatus: false, segundoParametro: false
        }
      }
    }
  ]

  montoReclamacion = ''
  importeBonificacion = ''

  cambioBusquedaPor(seleccion, reclamo) {
    Object.values(reclamo.busquedaPor).forEach(element => {
      element['estatus'] = false;
      element['segundoParametro'] = false
    });

    switch (seleccion) {
      case 'numeroTarjeta':
        reclamo.busquedaPor.numeroTarjeta.estatus = true;
        break;
      case 'numeroCuenta':
        reclamo.busquedaPor.numeroCuenta.estatus = true;
        break;
      case 'clienteUnico':
        reclamo.busquedaPor.clienteUnico.estatus = true;
        break;

      default:
        break;
    }
    reclamo.seleccionTipoBusqueda = seleccion;
  }

  seleccionoSegundoParametro(reclamo) {
    switch (reclamo.seleccionTipoBusqueda) {
      case 'numeroTarjeta':
        reclamo.busquedaPor.numeroTarjeta.segundoParametro = true;
        break;
      case 'numeroCuenta':
        reclamo.busquedaPor.numeroCuenta.segundoParametro = true;
        break;
      case 'clienteUnico':
        reclamo.busquedaPor.clienteUnico.segundoParametro = true;
        break;

      default:
        break;
    }
  }

  agregarCausa() {
    this.reclamos.push({
      id: this.reclamos.length, numeroReclamacion: '' + (this.reclamos.length + 1), descripcion: 'Reclamación' + this.reclamos.length + 1, seleccionTipoBusqueda: null, busquedaPor: {
        numeroTarjeta: {
          estatus: false, segundoParametro: false
        },
        numeroCuenta: {
          estatus: false, segundoParametro: false
        },
        clienteUnico: {
          estatus: false, segundoParametro: false
        }
      }
    })
  }
}

@Component({
  selector: 'conclusion',
  templateUrl: './conclusion.html'
})
export class ConclusionForm { }

@Component({
  selector: 'documentos',
  templateUrl: './documentos.html'
})
export class DocumentosForm {

  files = [
    { id: 'file1', label: 'Reclamación y anexos', name: 'ADJUNTAR ARCHIVO', estatus: false },
    { id: 'file2', label: 'Soportes de la respuesta', name: 'ADJUNTAR ARCHIVO', estatus: false },
    { id: 'file3', label: 'Soportes operativos', name: 'ADJUNTAR ARCHIVO', estatus: false },
  ];

  handleFileInput(loadedFile, file) {
    const selectedFile = this.files[this.files.indexOf(file)]
    selectedFile.estatus = true;
    selectedFile.name = loadedFile[0].name;
  }
}