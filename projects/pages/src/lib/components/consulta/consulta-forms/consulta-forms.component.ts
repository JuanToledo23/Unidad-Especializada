import { Component, OnInit } from '@angular/core';
import { CasoService } from 'dls';

@Component({
    selector: 'consulta-antecedentes-aclaraciones',
    templateUrl: './consulta-antecedentes-aclaraciones.html'
})
export class ConsultaAntecedentesAclaracionesForm {
    constructor(public casoService: CasoService) { }
}

@Component({
    selector: 'consulta-descripcion-problema',
    templateUrl: './consulta-descripcion-problema.html'
})
export class ConsultaDescripcionProblemaForm implements OnInit{
    constructor(public casoService: CasoService) { }

    montoReclamacion = ''
    importeBonificacion = ''

    ngOnInit(): void {
        this.casoService.validacion();
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
