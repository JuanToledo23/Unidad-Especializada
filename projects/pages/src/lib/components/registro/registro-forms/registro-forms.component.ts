import { Component } from '@angular/core';
import { CasoService } from 'dls';

@Component({
  selector: 'origen-reclamacion',
  templateUrl: './origen-reclamacion.html'
})
export class OrigenReclamacionForm {
  constructor() { }
}

@Component({
  selector: 'datos-generales-cliente',
  templateUrl: './datos-generales-cliente.html'
})
export class DatosGeneralesClienteForm { }

@Component({
  selector: 'antecedentes-aclaraciones',
  templateUrl: './antecedentes-aclaraciones.html'
})
export class AntecedentesAclaracionesForm {
  constructor(public casoService: CasoService) {}
}

@Component({
  selector: 'descripcion-problema',
  templateUrl: './descripcion-problema.html'
})
export class DescripcionProblemaForm {
  constructor(public casoService: CasoService) {}
}
