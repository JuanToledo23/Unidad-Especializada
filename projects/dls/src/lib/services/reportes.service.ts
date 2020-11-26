import { Injectable } from '@angular/core';

// interface Filtro {
//     value: string;
//     nombreFiltro: string;
// }

@Injectable({
    providedIn: 'root'
})
export class ReportesService {
    constructor(){}
    filtros = [
        {
            value: 'tipoSolicitud', nombreFiltro: 'Tipo de solicitud', 
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
            value: 'numeroSIO', nombreFiltro: 'Número de expediente SIO', 
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
            value: 'responsable', nombreFiltro: 'Responsable', 
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
            value: 'medioLlegada', nombreFiltro: 'Medio de llegada', 
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
            value: 'casoReversado', nombreFiltro: 'Caso reversado', 
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
            value: 'solicitudInformacionCONDUSEF', nombreFiltro: 'Solicitud de información CONDUSEF', 
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
            value: 'fechaRecepcion', nombreFiltro: 'Fecha de recepción', 
            segundoParametro: {
                type: 'select',
                parametros: [
                    {value: 'igualA', viewValue: 'Igual a'},
                    {value: 'mayorIgual', viewValue: 'Mayor o igual que'},
                    {value: 'menorIgual', viewValue: 'Menor o igual a'}
                ]
            },
            tercerParametro: {
                type: '',
                parametros: ''
            }
        },
        {
            value: 'fechaVencimiento', nombreFiltro: 'Fecha de vencimiento', 
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
            value: 'unidadAtencionUsuarios', nombreFiltro: 'Unidad Atención a Usuarios de CONDUSEF', 
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
            value: 'nombreCliente', nombreFiltro: 'Nombre del cliente', 
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
            value: 'nombreReclamante', nombreFiltro: 'Nombre del reclamante', 
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
            value: 'calleNumero', nombreFiltro: 'Calle y número', 
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
            value: 'colonia', nombreFiltro: 'Colonia', 
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
            value: 'poblacion', nombreFiltro: 'Población', 
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
            value: 'estado', nombreFiltro: 'Estado', 
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
            value: 'codigoPostal', nombreFiltro: 'Código Postal', 
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
            value: 'rcfCurp', nombreFiltro: 'RFC o CURP', 
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
            value: 'telefono', nombreFiltro: 'Teléfono', 
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
            value: 'correoElectronico', nombreFiltro: 'Correo electrónico', 
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
            value: 'foioPrevioAclaraciones', nombreFiltro: 'Folio previo de aclaraciones', 
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
            value: 'estatusAclaracion', nombreFiltro: 'Estatus de la aclaración', 
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
            value: 'falloAclaracion', nombreFiltro: 'Fallo de la aclaración', 
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
            value: 'montoReclamadoAclaraciones', nombreFiltro: 'Monto reclamado en aclaraciones', 
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
            value: 'sucursalOrigen', nombreFiltro: 'Sucursal de origen', 
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
            value: 'unidadNegocio', nombreFiltro: 'Unidad de Negocio', 
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
            value: 'tipoProductoServicio', nombreFiltro: 'Tipo de producto o servicio', 
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
            value: 'nombreComercialPRoductoServicio', nombreFiltro: 'Nombre comercial del producto o servicio', 
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
            value: 'canalOperacion', nombreFiltro: 'Canal de la operación', 
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
            value: 'causaInconformidad', nombreFiltro: 'Causa de la inconformidad', 
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
            value: 'transaccionesReclamadas', nombreFiltro: 'Transacciones reclamadas', 
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
            value: 'montoReclamacion', nombreFiltro: 'Monto de la reclamación', 
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
            value: 'importeBonificacionCancelado', nombreFiltro: 'Importe bonificado o cancelado', 
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
            value: 'falloReclamcion', nombreFiltro: 'Fallo de la reclamación', 
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
            value: 'falloDictamen', nombreFiltro: 'Fallo del dictamen', 
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
            value: 'motivoFallo', nombreFiltro: 'Motivo de fallo', 
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
            value: 'respuesta', nombreFiltro: 'Respuesta', 
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

    cambiarFiltro(filtro) {
        console.log(filtro);
    }
}


