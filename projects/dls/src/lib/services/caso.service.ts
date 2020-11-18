
import { Injectable } from '@angular/core';

export interface SType {
  estatus: boolean;
  segundoParametro: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CasoService {

  constructor() { }
  reclamos = [
    {
      id: 0,
      numeroReclamacion: '1',
      descripcion: 'Reclamación 1',
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
    }
  ];

  montoReclamado = '';
  montoReclamacion = '';
  importeBonificacion = '';

  cambioBusquedaPor(seleccion, reclamo) {
    Object.values(reclamo.busquedaPor).forEach((element: SType) => {
      element.estatus = false;
      element.segundoParametro = false;
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

}
