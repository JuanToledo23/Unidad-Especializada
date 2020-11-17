import { Component } from '@angular/core';
import { CasoService } from 'dls';

@Component({
    selector: 'consulta-antecedentes-aclaraciones',
    templateUrl: './consulta-antecedentes-aclaraciones.html'
})
export class ConsultaAntecedentesAclaracionesForm {
    constructor(public casoService: CasoService) {}
}

@Component({
    selector: 'consulta-descripcion-problema',
    templateUrl: './consulta-descripcion-problema.html'
})
export class ConsultaDescripcionProblemaForm {
    constructor(public casoService: CasoService) {}
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
    selector: 'consulta-conclusion',
    templateUrl: './consulta-conclusion.html'
})
export class ConsultaConclusionForm { }

@Component({
    selector: 'consulta-documentos',
    templateUrl: './consulta-documentos.html'
})
export class ConsultaDocumentosForm {

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
