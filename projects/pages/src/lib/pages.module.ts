import { RegistroComponent } from './components/registro/registro.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';

import { PagesRoutingModule } from './pages-routing.module';
import { MisAsuntosComponent } from './components/mis-asuntos/mis-asuntos.component';
import { PagesComponent } from './pages.component';

import { DlsModule, DirectiveModule } from 'dls';

import {
  ListaAclaracionesDialogComponent,
  EstatusAclaracionDialogComponent
} from './components/registro/dialogs/aclaraciones.component';


import {
  OrigenReclamacionFormComponent,
  DatosGeneralesClienteFormComponent,
  AntecedentesAclaracionesFormComponent,
  DescripcionProblemaFormComponent
} from './components/registro/registro-forms/registro-forms.component';

import { ConsultaComponent } from './components/consulta/consulta.component';
import {
  ConsultaAntecedentesAclaracionesFormComponent,
  ConsultaConclusionFormComponent,
  ConsultaDescripcionProblemaFormComponent,
  ConsultaDocumentosFormComponent,

} from './components/consulta/consulta-forms/consulta-forms.component';
import { CheckTokenInterceptor, CoreModule } from 'core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const DialogComponents = [
  ListaAclaracionesDialogComponent,
  EstatusAclaracionDialogComponent
];

const RegistroComponents = [
  OrigenReclamacionFormComponent,
  DatosGeneralesClienteFormComponent,
  AntecedentesAclaracionesFormComponent,
  DescripcionProblemaFormComponent
];

const ConsultaComponents = [
  ConsultaDocumentosFormComponent,
  ConsultaConclusionFormComponent,
  ConsultaAntecedentesAclaracionesFormComponent,
  ConsultaDescripcionProblemaFormComponent
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    DlsModule,
    DirectiveModule,
    CoreModule,
  ],
  declarations: [
    PagesComponent,
    MisAsuntosComponent,
    DialogComponents,
    RegistroComponents,
    RegistroComponent,
    ConsultaComponents,
    ConsultaComponent,
  ],
  exports: [
    PagesComponent,
    MisAsuntosComponent,
    DialogComponents,
    RegistroComponents,
    RegistroComponent,
    ConsultaComponents,
    ConsultaComponent,
  ],
  entryComponents: [
    DialogComponents
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CheckTokenInterceptor, multi: true },
  ]
})
export class PagesModule { }
