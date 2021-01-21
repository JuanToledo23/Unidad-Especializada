import { Component } from '@angular/core';
import { MisAsuntosService } from 'dls';

@Component({
  selector: 'datos-generales-quejoso',
  templateUrl: './datos-generales-quejoso.html'
})
export class REDECODatosGeneralesQuejoso {
  constructor(public misAsuntosService: MisAsuntosService) { }
}

@Component({
  selector: 'datos-cliente',
  templateUrl: './datos-cliente.html'
})
export class REDECODatosCliente {
  constructor(public misAsuntosService: MisAsuntosService) { }
}

@Component({
  selector: 'origen-queja',
  templateUrl: './origen-queja.html'
})
export class REDECOOrigenQueja {
  constructor(public misAsuntosService: MisAsuntosService) { }
}

@Component({
  selector: 'causas',
  templateUrl: './causas.html',
  styleUrls: ['./causas.scss']
})
export class REDECOCausas {
  causas:any = [
    {
      id:0, numero:'01', mostrarRespuesta: false, 
      causa: 'No mencionó el domicilio, correo electrónico y número telefónico de la unidad administrativa de la Entidad Financiera encargada de recibir las quejas por malas prácticas de cobranza.',
      respuesta: 'Se valida con despacho y encargado; nos proporcionan la siguiente información con relación a las quejas: El encargado informa que el despacho solo realiza gestiones de forma telefónica por lo que no existe posibilidad de escrito. El número telefónico al que se realizan las gestiones es el proporciona el titular al momento de la originación; sin embargo, no ha existido contacto al momento'
    },
    {
      id:1, numero:'02', mostrarRespuesta: false, 
      causa: 'No mencionó el domicilio, correo electrónico y número telefónico de la unidad administrativa de la Entidad Financiera encargada de recibir las quejas por malas prácticas de cobranza.',
      respuesta: 'Se valida con despacho y encargado; nos proporcionan la siguiente información con relación a las quejas: El encargado informa que el despacho solo realiza gestiones de forma telefónica por lo que no existe posibilidad de escrito. El número telefónico al que se realizan las gestiones es el proporciona el titular al momento de la originación; sin embargo, no ha existido contacto al momento'
    },
    {
      id:2, numero:'03', mostrarRespuesta: false, 
      causa: 'No mencionó el domicilio, correo electrónico y número telefónico de la unidad administrativa de la Entidad Financiera encargada de recibir las quejas por malas prácticas de cobranza.',
      respuesta: 'Se valida con despacho y encargado; nos proporcionan la siguiente información con relación a las quejas: El encargado informa que el despacho solo realiza gestiones de forma telefónica por lo que no existe posibilidad de escrito. El número telefónico al que se realizan las gestiones es el proporciona el titular al momento de la originación; sin embargo, no ha existido contacto al momento'
    },
    {
      id:3, numero:'04', mostrarRespuesta: false, 
      causa: 'No mencionó el domicilio, correo electrónico y número telefónico de la unidad administrativa de la Entidad Financiera encargada de recibir las quejas por malas prácticas de cobranza.',
      respuesta: 'Se valida con despacho y encargado; nos proporcionan la siguiente información con relación a las quejas: El encargado informa que el despacho solo realiza gestiones de forma telefónica por lo que no existe posibilidad de escrito. El número telefónico al que se realizan las gestiones es el proporciona el titular al momento de la originación; sin embargo, no ha existido contacto al momento'
    },
  ];
  constructor(public misAsuntosService: MisAsuntosService) { }

  verRespuesta(causa) {
    causa.mostrarRespuesta = !causa.mostrarRespuesta;
  }
}

@Component({
  selector: 'documentos',
  templateUrl: './documentos.html'
})
export class REDECODocumentos {
  files = [
    { id: 'file1', label: 'Acuse electrónico de CONDUCEF', name: 'ADJUNTAR ARCHIVO', estatus: false },
    { id: 'file2', label: 'Soportes en archivos de imágenes', name: 'ADJUNTAR ARCHIVO', estatus: false },
];

  constructor() { }

  handleFileInput(loadedFile, file) {
    const selectedFile = this.files[this.files.indexOf(file)]
    selectedFile.estatus = true;
    selectedFile.name = loadedFile[0].name;
}
}