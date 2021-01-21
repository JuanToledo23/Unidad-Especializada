import { Injectable } from '@angular/core';

export interface AsuntoPendiente {
    id: number;
    folio: string;
    nombre: string;
    estatus: string;
    fechaRecepcion: string;
    fechaVencimiento: string;
    idLlegada: number,
    medioLlegada: string;
    diasVencimiento: string;
}

@Injectable({
    providedIn: 'root'
})
export class MisAsuntosService {
    constructor(){}
    asuntoActivo: any = null;
    ASUNTOS_PENDIENTES: AsuntoPendiente[] = [
        { id: 0, folio: '49879', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '1' },
        { id: 1, folio: '50146', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '3' },
        { id: 2, folio: '50154', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '3' },
        { id: 3, folio: '50508', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '5' },
        { id: 4, folio: '50538', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '10' },
        { id: 5, folio: '50676', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaVencimiento: '2020-08-12', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '12' },
        { id: 6, folio: '50700', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '20' },
        { id: 7, folio: '50716', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '20' },
        { id: 8, folio: '50817', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaVencimiento: '2020-08-25', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '20' },
        { id: 9, folio: '50820', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaVencimiento: '---', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '---' },
        { id: 10, folio: '49879', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '1' },
        { id: 11, folio: '50146', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '3' },
        { id: 12, folio: '50154', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '3' },
        { id: 13, folio: '50508', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '5' },
        { id: 14, folio: '50538', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '10' },
        { id: 15, folio: '50676', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaVencimiento: '2020-08-12', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '12' },
        { id: 16, folio: '50700', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '20' },
        { id: 17, folio: '50716', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '20' },
        { id: 18, folio: '50817', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaVencimiento: '2020-08-25', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '20' },
        { id: 19, folio: '50820', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaVencimiento: '---', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '---' },
        { id: 20, folio: '49879', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '1' },
        { id: 21, folio: '50146', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '3' },
        { id: 22, folio: '50154', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaVencimiento: '2020-06-26', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '3' },
        { id: 23, folio: '50508', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '5' },
        { id: 24, folio: '50538', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-07-29', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '10' },
        { id: 25, folio: '50676', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaVencimiento: '2020-08-12', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA', diasVencimiento: '12' },
        { id: 26, folio: '50700', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN ELECTRÓNICA PORI', diasVencimiento: '20' },
        { id: 27, folio: '50716', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaVencimiento: '2020-08-14', idLlegada: 0, medioLlegada: 'GESTIÓN INMEDIATA', diasVencimiento: '20' },
        { id: 28, folio: '50817', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaVencimiento: '2020-08-25', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA', diasVencimiento: '20' },
        { id: 29, folio: '50820', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaVencimiento: '---', idLlegada: 1, medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', diasVencimiento: '---' },
    ]
}
