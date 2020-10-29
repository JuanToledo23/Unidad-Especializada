import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';

import { PagesRoutingModule } from './pages-routing.module';
import { MisAsuntosComponent } from './components/mis-asuntos/mis-asuntos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PagesComponent } from './pages.component';
import {  AntecedentesAclaracionesForm, 
          ConclusionForm, 
          DatosFinancierosForm, 
          DatosGeneralesClienteForm, 
          DescripcionProblemaForm, 
          DocumentosForm, 
          OrigenReclamacionForm 
} from './components/registro/registro-forms/registro-forms.component';
import { DlsModule, DirectiveModule } from 'dls';
import { ConsultaComponent } from './components/consulta/consulta.component';



const RegistroComponents = [
  OrigenReclamacionForm,
  DatosGeneralesClienteForm,
  DatosFinancierosForm,
  AntecedentesAclaracionesForm,
  DescripcionProblemaForm,
  ConclusionForm,
  DocumentosForm
]

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    DlsModule,
    DirectiveModule
  ],
  declarations: [
    PagesComponent,
    MisAsuntosComponent,
    RegistroComponent,
    RegistroComponents,
    ConsultaComponent
  ],
  exports: [
    PagesComponent,
    MisAsuntosComponent,
    RegistroComponent,
    RegistroComponents,
    ConsultaComponent
]
})
export class PagesModule { }
