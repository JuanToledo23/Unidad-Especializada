import { Injectable } from '@angular/core';

export interface Caso {
    id: number;
    folio: string;
    folioConducef: string;
    nombre: string;
    estatus: string;
    fechaRecepcion: string;
    fechaConclucion: string;
    fallo: string,
    medioLlegada: string;
}

@Injectable({
    providedIn: 'root'
})
export class ConsultaCasosService {
    constructor(){}
/*     asuntoActivo: any = null; */
    CASOS: Caso[] = [
        { id: 0, folio: '49879', folioConducef: '2020/190/12345', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA' },
        { id: 1, folio: '50146', folioConducef: '2020/190/12345', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA PORI' },
        { id: 2, folio: '50154', folioConducef: '2020/190/12345', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN INMEDIATA' },
        { id: 3, folio: '50508', folioConducef: '2020/190/12345', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaConclucion: '2020-07-29', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA' },
        { id: 4, folio: '50538', folioConducef: '2020/190/12345', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaConclucion: '2020-07-29', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL' },
        { id: 5, folio: '50676', folioConducef: '2020/190/12345', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaConclucion: '2020-08-12', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA' },
        { id: 6, folio: '50700', folioConducef: '2020/190/12345', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaConclucion: '2020-08-14', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA PORI' },
        { id: 7, folio: '50716', folioConducef: '2020/190/12345', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaConclucion: '2020-08-14', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN INMEDIATA' },
        { id: 8, folio: '50817', folioConducef: '2020/190/12345', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaConclucion: '2020-08-25', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA'},
        { id: 9, folio: '50820', folioConducef: '2020/190/12345', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaConclucion: '---', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', },
        { id: 10, folio: '49879', folioConducef: '2020/190/12345', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA' },
        { id: 11, folio: '50146', folioConducef: '2020/190/12345', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA PORI'},
        { id: 12, folio: '50154', folioConducef: '2020/190/12345', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN INMEDIATA'},
        { id: 13, folio: '50508', folioConducef: '2020/190/12345', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaConclucion: '2020-07-29', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA' },
        { id: 14, folio: '50538', folioConducef: '2020/190/12345', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaConclucion: '2020-07-29', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL' },
        { id: 15, folio: '50676', folioConducef: '2020/190/12345', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaConclucion: '2020-08-12', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA' },
        { id: 16, folio: '50700', folioConducef: '2020/190/12345', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaConclucion: '2020-08-14', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA PORI' },
        { id: 17, folio: '50716', folioConducef: '2020/190/12345', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaConclucion: '2020-08-14', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN INMEDIATA' },
        { id: 18, folio: '50817', folioConducef: '2020/190/12345', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaConclucion: '2020-08-25', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA' },
        { id: 19, folio: '50820', folioConducef: '2020/190/12345', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaConclucion: '---', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', },
        { id: 20, folio: '49879', folioConducef: '2020/190/12345', nombre: 'PEDRO RUBEN REYNOSO SORIANO', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA' },
        { id: 21, folio: '50146', folioConducef: '2020/190/12345', nombre: 'DIANA OLIVAREZ DIAZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA PORI'},
        { id: 22, folio: '50154', folioConducef: '2020/190/12345', nombre: 'JOSE GUADALUPE DIAZ MARTINEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-01', fechaConclucion: '2020-06-26', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN INMEDIATA'},
        { id: 23, folio: '50508', folioConducef: '2020/190/12345', nombre: 'RICARDO DE LA CRUZ LOPEZ', estatus: 'En análisis', fechaRecepcion: '2020-06-29', fechaConclucion: '2020-07-29', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA' },
        { id: 24, folio: '50538', folioConducef: '2020/190/12345', nombre: 'LESLY ANGELICA GARCIA DELGADO', estatus: 'En análisis', fechaRecepcion: '2020-07-02', fechaConclucion: '2020-07-29', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL' },
        { id: 25, folio: '50676', folioConducef: '2020/190/12345', nombre: 'ELSI ARELI LOPEZ PEREZ', estatus: 'En análisis', fechaRecepcion: '2020-07-16', fechaConclucion: '2020-08-12', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA' },
        { id: 26, folio: '50700', folioConducef: '2020/190/12345', nombre: 'JESSICA BERNAL CERON', estatus: 'Nuevo', fechaRecepcion: '2020-07-20', fechaConclucion: '2020-08-14', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN ELECTRÓNICA PORI' },
        { id: 27, folio: '50716', folioConducef: '2020/190/12345', nombre: 'EULOGIO HECTOR GALINDO ESCOBEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-02', fechaConclucion: '2020-08-14', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'GESTIÓN INMEDIATA' },
        { id: 28, folio: '50817', folioConducef: '2020/190/12345', nombre: 'ARELI LOPEZ MACEDO', estatus: 'Nuevo', fechaRecepcion: '2020-07-29', fechaConclucion: '2020-08-25', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA ELECTRÓNICA' },
        { id: 29, folio: '50820', folioConducef: '2020/190/12345', nombre: 'LUIS ARMANDO REYES CORTEZ', estatus: 'Detenido', fechaRecepcion: '2020-03-23', fechaConclucion: '---', fallo: 'GESTIÓN ELECTRÓNICA', medioLlegada: 'UNIDAD ESPECIALIZADA PRESENCIAL', },
    ]
}
