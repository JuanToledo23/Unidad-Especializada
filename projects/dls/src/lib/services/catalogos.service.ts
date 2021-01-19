import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CatalogosService {

    catalogoAnalistas = [
        {
            name: 'Analistas',
            selected: false,
            show: true,
            catalogo: [
            { name: '10028653 - JESUS ABAIS HERRERA', selected: false, status: true },
            { name: '10028652 - RAUL GONZALEZ PAEZ', selected: false, status: true },
            { name: '10028654 - ARTURO HERNANDEZ MEDERO', selected: false, status: true },
            { name: '722500 - NORMA AVENDAÑO ACOSTA', selected: false, status: true },
            { name: '976658 - DIEGO JIMENEZ MARTINEZ', selected: false, status: true }
            ]
        }
    ];
    constructor() { }
}
