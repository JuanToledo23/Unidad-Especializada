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
import { CargaExitosaDialog, CargaFalloDialog, CargaMasivaComponent } from './components/carga-masiva/carga-masiva.component';
import { ResultadoCargaDialog } from './components/carga-masiva/dialogs/resultado-carga.dialog';
import { EstatusAclaracionDialog, ListaAclaracionesDialog } from './components/registro/dialogs/aclaraciones.component';

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

const Dialogs = [
  CargaExitosaDialog,
  ResultadoCargaDialog,
  CargaFalloDialog,
  ListaAclaracionesDialog,
  EstatusAclaracionDialog
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
    CargaMasivaComponent,
    Dialogs
  ],
  exports: [
    PagesComponent,
    MisAsuntosComponent,
    RegistroComponent,
    RegistroComponents,
    ConsultaComponent,
    ConsultaComponents,
    CargaMasivaComponent
  ],
  entryComponents: [
    Dialogs
  ]
})
export class PagesModule { }
