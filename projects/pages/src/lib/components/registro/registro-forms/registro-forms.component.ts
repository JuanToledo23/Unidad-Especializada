import { Component } from '@angular/core';

@Component({
  selector: 'origen-reclamacion',
  templateUrl: './origen-reclamacion.html'
})
export class OrigenReclamacionForm {
  constructor() {}
}

@Component({
  selector: 'datos-generales-cliente',
  templateUrl: './datos-generales-cliente.html'
})
export class DatosGeneralesClienteForm {}

@Component({
  selector: 'datos-financieros',
  templateUrl: './datos-financieros.html'
})
export class DatosFinancierosForm {}

@Component({
  selector: 'antecedentes-aclaraciones',
  templateUrl: './antecedentes-aclaraciones.html'
})
export class AntecedentesAclaracionesForm {}

@Component({
  selector: 'descripcion-problema',
  templateUrl: './descripcion-problema.html'
})
export class DescripcionProblemaForm {}

@Component({
  selector: 'conclusion',
  templateUrl: './conclusion.html'
})
export class ConclusionForm {}

@Component({
  selector: 'documentos',
  templateUrl: './documentos.html'
})
export class DocumentosForm {

  files = [
    {id: 'file1', label: 'Reclamación y anexos', name: 'ADJUNTAR ARCHIVO', estatus: false},
    {id: 'file2', label: 'Soportes de la respuesta', name: 'ADJUNTAR ARCHIVO', estatus: false},
    {id: 'file3', label: 'Soportes operativos', name: 'ADJUNTAR ARCHIVO', estatus: false},
  ];

  handleFileInput(loadedFile, file) {
    const selectedFile = this.files[this.files.indexOf(file)]
    selectedFile.estatus = true;
    selectedFile.name = loadedFile[0].name;
  }
}