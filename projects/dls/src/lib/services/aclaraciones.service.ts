import { Injectable } from '@angular/core';

export interface Aclaracion {
    folio: number;
    nombre: string;
    numeroCuenta: number;
    fallo: string;
}

@Injectable({
    providedIn: 'root'
})
export class AclaracionesService {
    constructor(){}
    ACLARACIONES: Aclaracion[] = [
        {folio: 2033292, nombre: 'JUAN ENRIQUE JOMENEZ RIVERO', numeroCuenta: 22066838711966, fallo: 'PROCEDE'},
        {folio: 2502004, nombre: 'JUAN ALBERTO TOLEDO TELLO', numeroCuenta: 22066838711967, fallo: 'PROCEDE'},
        {folio: 2521995, nombre: 'ARANTXA CASTAÑEDA DORANTES', numeroCuenta: 22066838711968, fallo: 'NO PROCEDE'},
        {folio: 2596631, nombre: 'OMAR QUIROZ HERNANDEZ', numeroCuenta: 22066838711969, fallo: 'PROCEDE'},
    ]
}
