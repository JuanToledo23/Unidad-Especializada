import { Injectable } from '@angular/core';

export interface RegistroReporte {
    id: number;
    tipoSolicitud: string;
    numeroSIO: string;
    responsable: string;
    medioLlegada: string;
    casoReversado: string;
    solicitudInformacionCONDUSEF: string;
    fechaRecepcion: string;
    fechaVencimiento: string;
    unidadAtencionUsuarios: string;
    nombreCliente: string;
    nombreReclamante: string;
    calleNumero: string;
    colonia:string;
    poblacion: string;
    estado: string;
    codigoPostal: string;
    rcfCurp: string;
    telefono: string;
    correoElectronico: string;
    folioPrevioAclaraciones: string;
    estatusAclaracion: string;
    falloAclaracion: string;
    montoReclamadoAclaraciones: string;
    sucursalOrigen: string;
    unidadNegocio: string;
    tipoProductoServicio: string;
    nombreComercialProductoServicio: string;
    canalOperacion: string;
    causaInconformidad: string;
    transaccionesReclamadas: string;
    montoReclamacion: string;
    importeBonificacionCancelado: string;
    falloReclamacion: string;
    falloDictamen: string;
    motivoFallo: string;
    respuesta: string;
}

@Injectable({
    providedIn: 'root'
})
export class ReportesService {
    constructor(){}
    filtros = [
        {
            value: 'tipoSolicitud',  mostrarColumna: true, nombreFiltro: 'Tipo de solicitud', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'numeroSIO',  mostrarColumna: false, nombreFiltro: 'Número de expediente SIO', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'responsable',  mostrarColumna: false, nombreFiltro: 'Responsable', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'medioLlegada',  mostrarColumna: false, nombreFiltro: 'Medio de llegada', 
            segundoParametro: {
                type: 'select',
                parametros: [
                    {value: 'igualA', viewValue: 'Igual a'},
                    {value: 'opcion2', viewValue: 'Opción 2'},
                    {value: 'opcion3', viewValue: 'Opción 3'},
                ]
            },
            tercerParametro: {
                type: 'select',
                parametros: [
                    {value: 'gestionElectronica', viewValue: 'Gestion electronica'},
                    {value: 'opcion2', viewValue: 'Opción 2'},
                    {value: 'opcion3', viewValue: 'Opción 3'},
                ]
            }
        },
        {
            value: 'casoReversado',  mostrarColumna: false, nombreFiltro: 'Caso reversado', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'solicitudInformacionCONDUSEF',  mostrarColumna: false, nombreFiltro: 'Solicitud de información CONDUSEF', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'fechaRecepcion',  mostrarColumna: false, nombreFiltro: 'Fecha de recepción', 
            segundoParametro: {
                type: 'select',
                parametros: [
                    {value: 'igualA', viewValue: 'Igual a'},
                    {value: 'mayorIgual', viewValue: 'Mayor o igual que'},
                    {value: 'menorIgual', viewValue: 'Menor o igual a'}
                ]
            },
            tercerParametro: {
                type: 'date',
                parametros: ''
            }
        },
        {
            value: 'fechaVencimiento',  mostrarColumna: false, nombreFiltro: 'Fecha de vencimiento', 
            segundoParametro: {
                type: 'select',
                parametros: [
                    {value: 'igualA', viewValue: 'Igual a'},
                    {value: 'mayorIgual', viewValue: 'Mayor o igual que'},
                    {value: 'menorIgual', viewValue: 'Menor o igual a'}
                ]
            },
            tercerParametro: {
                type: 'date',
                parametros: ''
            }
        },
        {
            value: 'unidadAtencionUsuarios',  mostrarColumna: false, nombreFiltro: 'Unidad Atención a Usuarios de CONDUSEF', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'nombreCliente',  mostrarColumna: false, nombreFiltro: 'Nombre del cliente', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'nombreReclamante',  mostrarColumna: false, nombreFiltro: 'Nombre del reclamante', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'calleNumero',  mostrarColumna: false, nombreFiltro: 'Calle y número', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'colonia',  mostrarColumna: false, nombreFiltro: 'Colonia', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'poblacion',  mostrarColumna: false, nombreFiltro: 'Población', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'estado',  mostrarColumna: false, nombreFiltro: 'Estado', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'codigoPostal',  mostrarColumna: false, nombreFiltro: 'Código Postal', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'rcfCurp',  mostrarColumna: false, nombreFiltro: 'RFC o CURP', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'telefono',  mostrarColumna: false, nombreFiltro: 'Teléfono', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'correoElectronico',  mostrarColumna: false, nombreFiltro: 'Correo electrónico', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'folioPrevioAclaraciones',  mostrarColumna: false, nombreFiltro: 'Folio previo de aclaraciones', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'estatusAclaracion',  mostrarColumna: false, nombreFiltro: 'Estatus de la aclaración', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'falloAclaracion',  mostrarColumna: false, nombreFiltro: 'Fallo de la aclaración', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'montoReclamadoAclaraciones',  mostrarColumna: false, nombreFiltro: 'Monto reclamado en aclaraciones', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'sucursalOrigen',  mostrarColumna: false, nombreFiltro: 'Sucursal de origen', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'unidadNegocio',  mostrarColumna: false, nombreFiltro: 'Unidad de Negocio', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'tipoProductoServicio',  mostrarColumna: false, nombreFiltro: 'Tipo de producto o servicio', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'nombreComercialProductoServicio',  mostrarColumna: false, nombreFiltro: 'Nombre comercial del producto o servicio', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'canalOperacion',  mostrarColumna: false, nombreFiltro: 'Canal de la operación', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'causaInconformidad',  mostrarColumna: false, nombreFiltro: 'Causa de la inconformidad', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'transaccionesReclamadas',  mostrarColumna: false, nombreFiltro: 'Transacciones reclamadas', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'montoReclamacion',  mostrarColumna: false, nombreFiltro: 'Monto de la reclamación', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'importeBonificacionCancelado',  mostrarColumna: false, nombreFiltro: 'Importe bonificado o cancelado', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'falloReclamacion',  mostrarColumna: false, nombreFiltro: 'Fallo de la reclamación', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'falloDictamen',  mostrarColumna: false, nombreFiltro: 'Fallo del dictamen', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'motivoFallo',  mostrarColumna: false, nombreFiltro: 'Motivo de fallo', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'respuesta',  mostrarColumna: false, nombreFiltro: 'Respuesta', 
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
    ];

    filtrosSeleccionados = [
        { 
            id: 0, 
            value: '',
            mostrarColumna: false, 
            nombreFiltro: '',
            segundoParametro: {
                type: '',
                parametros: ''
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
    ];

    REGISTROS_REPORTES: RegistroReporte[] = [
        {
            id: 0,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 1,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 2,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 3,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 4,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 5,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 6,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 7,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 8,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 9,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 10,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 11,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 12,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 13,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 14,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        },
        {
            id: 15,
            tipoSolicitud: 'TEXTO DE PRUEBA',
            numeroSIO: 'TEXTO DE PRUEBA',
            responsable: 'TEXTO DE PRUEBA',
            medioLlegada: 'TEXTO DE PRUEBA',
            casoReversado: 'TEXTO DE PRUEBA',
            solicitudInformacionCONDUSEF: 'TEXTO DE PRUEBA',
            fechaRecepcion: 'TEXTO DE PRUEBA',
            fechaVencimiento: 'TEXTO DE PRUEBA',
            unidadAtencionUsuarios: 'TEXTO DE PRUEBA',
            nombreCliente: 'TEXTO DE PRUEBA',
            nombreReclamante: 'TEXTO DE PRUEBA',
            calleNumero: 'TEXTO DE PRUEBA',
            colonia:'TEXTO DE PRUEBA',
            poblacion: 'TEXTO DE PRUEBA',
            estado: 'TEXTO DE PRUEBA',
            codigoPostal: 'TEXTO DE PRUEBA',
            rcfCurp: 'TEXTO DE PRUEBA',
            telefono: 'TEXTO DE PRUEBA',
            correoElectronico: 'TEXTO DE PRUEBA',
            folioPrevioAclaraciones: 'TEXTO DE PRUEBA',
            estatusAclaracion: 'TEXTO DE PRUEBA',
            falloAclaracion: 'TEXTO DE PRUEBA',
            montoReclamadoAclaraciones: 'TEXTO DE PRUEBA',
            sucursalOrigen: 'TEXTO DE PRUEBA',
            unidadNegocio: 'TEXTO DE PRUEBA',
            tipoProductoServicio: 'TEXTO DE PRUEBA',
            nombreComercialProductoServicio: 'TEXTO DE PRUEBA',
            canalOperacion: 'TEXTO DE PRUEBA',
            causaInconformidad: 'TEXTO DE PRUEBA',
            transaccionesReclamadas: 'TEXTO DE PRUEBA',
            montoReclamacion: 'TEXTO DE PRUEBA',
            importeBonificacionCancelado: 'TEXTO DE PRUEBA',
            falloReclamacion: 'TEXTO DE PRUEBA',
            falloDictamen: 'TEXTO DE PRUEBA',
            motivoFallo: 'TEXTO DE PRUEBA',
            respuesta: 'TEXTO DE PRUEBA',
        }
    ]
}


