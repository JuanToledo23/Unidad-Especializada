import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CasoService {

    constructor() { }
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
            },
            btnEliminar: true,
            btnLimpiar: true,
            btnAnadir: true
        }
    ]

    montoReclamado = ''
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


    agregarReclamo() {
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
            },
            btnEliminar: true,
            btnLimpiar: true,
            btnAnadir: true
        })

        this.validacion()
    }

    eliminarCausa(reclamo) {
        let i = this.reclamos.indexOf(reclamo);
        this.reclamos.splice(i, 1);
        this.validacion()
    }

    validacion() {
        this.reclamos.forEach(element => {
            element.btnEliminar = true;
            element.btnLimpiar = true;
            element.btnAnadir = true;
        });

        if (this.reclamos.length === 1) {
            this.reclamos[0].btnEliminar = false;
        }

        if (this.reclamos.length > 1) {
            this.reclamos[0].btnEliminar = true;

            this.reclamos.forEach(element => {
                element.btnAnadir = false;
            });

            this.reclamos[this.reclamos.length - 1].btnAnadir = true;
        }
    }

}
