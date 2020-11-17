import { Injectable } from '@angular/core';

export interface Aclaracion {
    folio: number;
    nombre: string;
    numeroCuenta: number;
    fallo: string;
    estatus: String;
    montoReclamo: String;
}

export interface PEDIDO_AFECTADO {
    subfolio: String, 
    pedidoAfectado: String, 
    fecha: String, 
    importe: String, 
    canalOrigen: String, 
    sucursalOrigen: String,
    canalOperacion: String, 
    fallo: String, 
    caso: String, 
    tarjetaChip: String, 
    modoEntrada: String, 
    estatus: String
    montoReclamo: String
}

export interface BITACORA {
    rol: String, 
    nombre: String, 
    fechaOperacion: String, 
    accion: String, 
    comentario: String
}

@Injectable({
    providedIn: 'root'
})
export class AclaracionesService {
    constructor(){}
    ACLARACIONES: Aclaracion[] = [
        {folio: 2033292, nombre: 'JUAN ENRIQUE JOMENEZ RIVERO', numeroCuenta: 22066838711966, fallo: 'PROCEDE', estatus: 'FINALIZADA', montoReclamo: '$1,287.00'},
        {folio: 2502004, nombre: 'JUAN ALBERTO TOLEDO TELLO', numeroCuenta: 22066838711967, fallo: 'PROCEDE', estatus: 'FINALIZADA', montoReclamo: '$1,287.00'},
        {folio: 2521995, nombre: 'ARANTXA CASTAÑEDA DORANTES', numeroCuenta: 22066838711968, fallo: 'NO PROCEDE', estatus: 'FINALIZADA', montoReclamo: '$1,287.00'},
        {folio: 2596631, nombre: 'OMAR QUIROZ HERNANDEZ', numeroCuenta: 22066838711969, fallo: 'PROCEDE', estatus: 'FINALIZADA', montoReclamo: '$1,287.00'},
    ]
    PEDIDOS_AFECTADOS: PEDIDO_AFECTADO[] = [
        {subfolio: '20332920003', pedidoAfectado: '446607', fecha: '2020-02-18', importe: '$220.00', canalOrigen: '1', sucursalOrigen: '2206', canalOperacion: 'NA', fallo: 'PROCEDE', caso: 'CARGO NO RECONOCIDO', tarjetaChip: 'NA', modoEntrada: 'NA', estatus:'FINALIZADA', montoReclamo: '$220.00'},
        {subfolio: '20332920001', pedidoAfectado: '445560', fecha: '2020-01-29', importe: '$899.00', canalOrigen: '1', sucursalOrigen: '2206', canalOperacion: 'NA', fallo: 'PROCEDE', caso: 'CARGO NO RECONOCIDO', tarjetaChip: 'Si', modoEntrada: 'NA', estatus:'FINALIZADA', montoReclamo: '$899.00'},
        {subfolio: '20332920002', pedidoAfectado: '445443', fecha: '2020-01-29', importe: '$168.00', canalOrigen: '1', sucursalOrigen: '2206', canalOperacion: 'TPV', fallo: 'PROCEDE', caso: 'CARGO NO RECONOCIDO', tarjetaChip: 'Si', modoEntrada: 'OPERACIÓN TARJETA CHIP', estatus:'FINALIZADA', montoReclamo: '$168.00'}
    ]

    aclaracionEnlazada = {
        folio: '', fallo: '- - -', estatus: '- - -', montoReclamo: '- - -'
    }

    BITACORA_REGISTRADA: BITACORA[] = [
        {rol: 'CAPTURISTA ADN', nombre: 'EDUARDO TRUE TRUE', fechaOperacion: '15/02/2020', accion: 'CREACIÓN ACLARACIÓN', comentario: 'LA PRESENTE ACLARACIÓN HA SIDO CREADA'},
        {rol: 'CAPTURISTA ADN', nombre: 'EDUARDO TRUE TRUE', fechaOperacion: '15/02/2020', accion: 'CREACIÓN PREACLARACIÓN', comentario: 'LA PRESENTE ACLARACIÓN HA SIDO CREADA'}, 
        {rol: 'REPORTES/ASIGNACIONES/RESPONSABLE', nombre: 'ANGEL FERNANDO GOMEZ', fechaOperacion: '16/02/2020', accion: 'RESIGNACIÓN', comentario: 'RESIGNACIÓN. PROCESO AUTOMÁTICO'},    
        {rol: 'REPORTES/ASIGNACIONES/RESPONSABLE', nombre: 'MISHELL SARAHI OSORIO HUERTA', fechaOperacion: '17/02/2020', accion: 'RESIGNACIÓN', comentario: 'RESIGNACIÓN. PROCESO AUTOMÁTICO'},    
        {rol: 'ANALISTA', nombre: 'VERONICA BRIONES RESENDIZ', fechaOperacion: '18/02/2020', accion: 'PRIMERA REVISIÓN', comentario: '- - - -'},    
        {rol: 'ANALISTA', nombre: 'VERONICA BRIONES RESENDIZ', fechaOperacion: '18/02/2020', accion: 'PRIMERA REVISIÓN', comentario: '- - - -'},    
        {rol: 'RESPONSABLE', nombre: 'JORGE SANCHEZ TREJO', fechaOperacion: '18/02/2020', accion: 'RESPONSABLE AUTORIZÓ', comentario: 'ENVÍO A CARTERA'},  
        {rol: 'ADMINISTRADOR', nombre: 'PROCESO AUTOMATICO', fechaOperacion: '18/02/2020', accion: 'CONTASTACIÓN SOAC', comentario: 'CONTASTACIÓN SOAC'},  
        {rol: 'ANALISTA', nombre: 'VERONICA BRIONES RESENDIZ', fechaOperacion: '18/02/2020', accion: 'FINALIZACIÓN', comentario: 'ESTIMADO JUAN ENRIQUE JIMÉNEZ RIVERO, CON FECHA 18/02/2020 SE CANCELARON LOS PEDIDOS RECLAMADOS Y SE APLICÓ PRORRATEO A PEDIDO ACTIVO. LAMENTAMOS MUCHO LOS INCONVENIENTES OCASIONADOS Y APROVECHAMOS LA OCASIÓN PARA REITERARNOS A SUS ÓRDENES EN NUESTRO CENTRO DE ATENCIÓN TELÉFONICA 5447 8810'},    
    ]
}
