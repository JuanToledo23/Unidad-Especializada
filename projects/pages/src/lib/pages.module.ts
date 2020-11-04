import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';

import { PagesRoutingModule } from './pages-routing.module';
import { MisAsuntosComponent } from './components/mis-asuntos/mis-asuntos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PagesComponent } from './pages.component';
import {  AntecedentesAclaracionesForm, 
          DatosGeneralesClienteForm, 
          DescripcionProblemaForm, 
          OrigenReclamacionForm 
} from './components/registro/registro-forms/registro-forms.component';
import { DlsModule, DirectiveModule } from 'dls';
import { ConsultaComponent } from './components/consulta/consulta.component';
import {  ConsultaAntecedentesAclaracionesForm, 
          ConsultaConclusionForm, 
          ConsultaDescripcionProblemaForm, 
          ConsultaDocumentosForm,

} from './components/consulta/consulta-forms/consulta-forms.component';
import { CargaMasivaComponent } from './components/carga-masiva/carga-masiva.component';

const RegistroComponents = [
  OrigenReclamacionForm,
  DatosGeneralesClienteForm,
  AntecedentesAclaracionesForm,
  DescripcionProblemaForm
]

const ConsultaComponents = [
  ConsultaDocumentosForm,
  ConsultaConclusionForm,
  ConsultaAntecedentesAclaracionesForm,
  ConsultaDescripcionProblemaForm
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
    ConsultaComponent,
    ConsultaComponents,
    CargaMasivaComponent
  ],
  exports: [
    PagesComponent,
    MisAsuntosComponent,
    RegistroComponent,
    RegistroComponents,
    ConsultaComponent,
    ConsultaComponents,
    CargaMasivaComponent
]
})
export class PagesModule { }
