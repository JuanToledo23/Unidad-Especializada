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
import { ReporteadorComponent } from './components/reportes/reporteador/reporteador.component';
import { OrdenarReporteComponent } from './components/reportes/ordenar-reporte/ordenar-reporte.component';
import { ExportarReporteComponent } from './components/reportes/exportar-reporte/exportar-reporte.component';
import { AdministracionCatalogosComponent, FilterArrayPipe } from './components/administracion-catalogos/administracion-catalogos.component';
import { AdministracionDiasInhabilesComponent, HabilitarDeshabilitarDiasDialog, NombreMesPipe } from './components/administracion-dias-inhabiles/administracion-dias-inhabiles.component';
import { ConfirmarItemDialog } from './components/administracion-catalogos/dialogs/confirmar-item.dialog';

import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { ConfirmacionDialog, ReasignacionCasosComponent } from './components/reasignacion-casos/reasignacion-casos.component';
import { CancelacionFoliosComponent, ConfirmacionCancelacionDialog } from './components/cancelacion-folio/cancelacion-folios.component';
import { REDECORegistroComponent } from './REDECO-components/registro/registro.component';
import { REDECOCausas, REDECODatosCliente, REDECODatosGeneralesQuejoso, REDECODocumentos, REDECOOrigenQueja } from './REDECO-components/registro/registro-forms/registro-forms.component';


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

const ReportesComponents = [
  ReporteadorComponent,
  OrdenarReporteComponent,
  ExportarReporteComponent
]

const REDECORegistroComponents = [
  REDECODatosGeneralesQuejoso,
  REDECODatosCliente,
  REDECOOrigenQueja,
  REDECOCausas,
  REDECODocumentos
]

const Dialogs = [
  CargaExitosaDialog,
  ResultadoCargaDialog,
  CargaFalloDialog,
  ListaAclaracionesDialog,
  EstatusAclaracionDialog,
  ConfirmarItemDialog,
  HabilitarDeshabilitarDiasDialog,
  ConfirmacionDialog,
  ConfirmacionCancelacionDialog
]

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    PagesRoutingModule,
    DlsModule,
    DirectiveModule,
    SatDatepickerModule, SatNativeDateModule
  ],
  declarations: [
    PagesComponent,
    MisAsuntosComponent,
    RegistroComponent,
    RegistroComponents,
    ConsultaComponent,
    ConsultaComponents,
    CargaMasivaComponent,
    ReportesComponents,
    AdministracionCatalogosComponent,
    AdministracionDiasInhabilesComponent,
    ReasignacionCasosComponent,
    CancelacionFoliosComponent,
    REDECORegistroComponent,
    REDECORegistroComponents,
    Dialogs,
    FilterArrayPipe,
    NombreMesPipe
  ],
  exports: [
    PagesComponent,
    MisAsuntosComponent,
    RegistroComponent,
    RegistroComponents,
    ConsultaComponent,
    ConsultaComponents,
    CargaMasivaComponent,
    ReportesComponents,
    AdministracionCatalogosComponent,
    AdministracionDiasInhabilesComponent,
    ReasignacionCasosComponent,
    CancelacionFoliosComponent,
    REDECORegistroComponent,
    REDECORegistroComponents,
  ],
  entryComponents: [
    Dialogs
  ]
})
export class PagesModule { }
