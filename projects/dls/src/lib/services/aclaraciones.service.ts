import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ResponseClarificationsGeneral } from './interfaces/AclaracionesDetails.interface';

export interface Aclaracion {
    folio: string;
    nombre: string;
    numeroCuenta: number;
    fallo: string;
    estatus: string;
    montoReclamo: string;
}

export interface PedidoAfectado {
    subfolio: string;
    pedidoAfectado: string;
    fecha: string;
    importe: string;
    canalOrigen: string;
    sucursalOrigen: string;
    canalOperacion: string;
    fallo: string;
    caso: string;
    tarjetaChip: string;
    modoEntrada: string;
    estatus: string;
    montoReclamo: string;
}

export interface PEdidiosAfectado {
    subFolio: string;
    affectedOrder: string;
    date: string;
    amount: string;
    originChannel: string;
    originBranch: string;
    channel: string;
    opinion: string;
    caseName: string;
    chipCard: string;
    input: string;
    status?: string;
    reclaimedAmount: string;
}

export interface BITACORA {
    rol: string;
    nombre: string;
    fechaOperacion: string;
    accion: string;
    comentario: string;
}

export interface Bitacora {
    role: string;
    name: string;
    operationDate: string;
    comments: string;
    action: string;
}

export interface Clarification {
    clarificationId: string;
    name: string;
    accountNumber: string;
    opinion: string;
    clarification?: any;
}

@Injectable({
    providedIn: 'root'
})
export class AclaracionesService {
    private clarificationBinded: BehaviorSubject<any>;
    public clarificationBinded$: Observable<any>;

    private clarifications: BehaviorSubject<Clarification[]>;
    public clarifications$: Observable<Clarification[]>;

    private clarificationDetail: Subject<ResponseClarificationsGeneral>;
    public clarificationDetail$: Observable<ResponseClarificationsGeneral>;

    aclaracionEnlazada = {
        clarificationId: '',
        opinion: '- - -',
        status: '- - -',
        reclaimedAmount: '- - -'
    };

    constructor() {
        this.clarificationBinded = new BehaviorSubject<any>(this.aclaracionEnlazada);
        this.clarificationBinded$ = this.clarificationBinded.asObservable();

        this.clarifications = new BehaviorSubject<Clarification[]>([]);
        this.clarifications$ = this.clarifications.asObservable();

        this.clarificationDetail = new Subject<ResponseClarificationsGeneral>();
        this.clarificationDetail$ = this.clarificationDetail.asObservable();
    }

    ACLARACIONES: Aclaracion[] = [{
        folio: '2033292',
        nombre: 'JUAN ENRIQUE JOMENEZ RIVERO',
        numeroCuenta: 22066838711966,
        fallo: 'PROCEDE',
        estatus: 'FINALIZADA',
        montoReclamo: '$1,287.00'
    },
    {
        folio: '2502004',
        nombre: 'JUAN ALBERTO TOLEDO TELLO',
        numeroCuenta: 22066838711967,
        fallo: 'PROCEDE',
        estatus: 'FINALIZADA',
        montoReclamo: '$1,287.00'
    },
    {
        folio: '2521995',
        nombre: 'ARANTXA CASTAÑEDA DORANTES',
        numeroCuenta: 22066838711968,
        fallo: 'NO PROCEDE',
        estatus: 'FINALIZADA',
        montoReclamo: '$1,287.00'
    },
    {
        folio: '2596631',
        nombre: 'OMAR QUIROZ HERNANDEZ',
        numeroCuenta: 22066838711969,
        fallo: 'PROCEDE',
        estatus: 'FINALIZADA',
        montoReclamo: '$1,287.00'
    },
    ];

    PEDIDOS_AFECTADOS: PedidoAfectado[] = [{
        subfolio: '20332920003',
        pedidoAfectado: '446607',
        fecha: '2020-02-18',
        importe: '$220.00',
        canalOrigen: '1',
        sucursalOrigen: '2206',
        canalOperacion: 'NA',
        fallo: 'PROCEDE',
        caso: 'CARGO NO RECONOCIDO',
        tarjetaChip: 'NA',
        modoEntrada: 'NA',
        estatus: 'FINALIZADA',
        montoReclamo: '$220.00'
    },
    {
        subfolio: '20332920001',
        pedidoAfectado: '445560',
        fecha: '2020-01-29',
        importe: '$899.00',
        canalOrigen: '1',
        sucursalOrigen: '2206',
        canalOperacion: 'NA',
        fallo: 'PROCEDE',
        caso: 'CARGO NO RECONOCIDO',
        tarjetaChip: 'Si',
        modoEntrada: 'NA',
        estatus: 'FINALIZADA',
        montoReclamo: '$899.00'
    },
    {
        subfolio: '20332920002',
        pedidoAfectado: '445443',
        fecha: '2020-01-29',
        importe: '$168.00',
        canalOrigen: '1',
        sucursalOrigen: '2206',
        canalOperacion: 'TPV',
        fallo: 'PROCEDE',
        caso: 'CARGO NO RECONOCIDO',
        tarjetaChip: 'Si',
        modoEntrada: 'OPERACIÓN TARJETA CHIP',
        estatus: 'FINALIZADA',
        montoReclamo: '$168.00'
    }
    ];

    BITACORA_REGISTRADA: BITACORA[] = [{
        rol: 'CAPTURISTA ADN',
        nombre: 'EDUARDO TRUE TRUE',
        fechaOperacion: '15/02/2020',
        accion: 'CREACIÓN ACLARACIÓN',
        comentario: 'LA PRESENTE ACLARACIÓN HA SIDO CREADA'
    },
    {
        rol: 'CAPTURISTA ADN',
        nombre: 'EDUARDO TRUE TRUE',
        fechaOperacion: '15/02/2020',
        accion: 'CREACIÓN PREACLARACIÓN',
        comentario: 'LA PRESENTE ACLARACIÓN HA SIDO CREADA'
    },
    {
        rol: 'REPORTES/ASIGNACIONES/RESPONSABLE',
        nombre: 'ANGEL FERNANDO GOMEZ',
        fechaOperacion: '16/02/2020',
        accion: 'RESIGNACIÓN',
        comentario: 'RESIGNACIÓN. PROCESO AUTOMÁTICO'
    },
    {
        rol: 'REPORTES/ASIGNACIONES/RESPONSABLE',
        nombre: 'MISHELL SARAHI OSORIO HUERTA',
        fechaOperacion: '17/02/2020',
        accion: 'RESIGNACIÓN',
        comentario: 'RESIGNACIÓN. PROCESO AUTOMÁTICO'
    },
    {
        rol: 'ANALISTA',
        nombre: 'VERONICA BRIONES RESENDIZ',
        fechaOperacion: '18/02/2020',
        accion: 'PRIMERA REVISIÓN',
        comentario: '- - - -'
    },
    {
        rol: 'ANALISTA',
        nombre: 'VERONICA BRIONES RESENDIZ',
        fechaOperacion: '18/02/2020',
        accion: 'PRIMERA REVISIÓN',
        comentario: '- - - -'
    },
    {
        rol: 'RESPONSABLE',
        nombre: 'JORGE SANCHEZ TREJO',
        fechaOperacion: '18/02/2020',
        accion: 'RESPONSABLE AUTORIZÓ',
        comentario: 'ENVÍO A CARTERA'
    },
    {
        rol: 'ADMINISTRADOR',
        nombre: 'PROCESO AUTOMATICO',
        fechaOperacion: '18/02/2020',
        accion: 'CONTASTACIÓN SOAC',
        comentario: 'CONTASTACIÓN SOAC'
    },
    {
        rol: 'ANALISTA',
        nombre: 'VERONICA BRIONES RESENDIZ',
        fechaOperacion: '18/02/2020',
        accion: 'FINALIZACIÓN',
        comentario: 'ESTIMADO JUAN ENRIQUE JIMÉNEZ RIVERO, CON FECHA 18/02/2020 SE CANCELARON LOS PEDIDOS RECLAMADOS Y SE APLICÓ PRORRATEO A PEDIDO ACTIVO. LAMENTAMOS MUCHO LOS INCONVENIENTES OCASIONADOS Y APROVECHAMOS LA OCASIÓN PARA REITERARNOS A SUS ÓRDENES EN NUESTRO CENTRO DE ATENCIÓN TELÉFONICA 5447 8810'
    },
    ];

    setClarificatiosn( clarifications: Clarification[]): void {
        this.clarifications.next(clarifications);
    }

    setClarificationDetail( clarificationDetal: ResponseClarificationsGeneral) {
        this.clarificationDetail.next(clarificationDetal);
    }

    setClarificationBinded( clarification: any) {
        this.clarificationBinded.next(clarification);
    }
}
