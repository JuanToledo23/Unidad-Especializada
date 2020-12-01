import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargaMasivaComponent } from './components/carga-masiva/carga-masiva.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { MisAsuntosComponent } from './components/mis-asuntos/mis-asuntos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ExportarReporteComponent } from './components/reportes/exportar-reporte/exportar-reporte.component';
import { OrdenarReporteComponent } from './components/reportes/ordenar-reporte/ordenar-reporte.component';
import { ReporteadorComponent } from './components/reportes/reporteador/reporteador.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'mis-asuntos', component: MisAsuntosComponent,
      },
      {
        path:'registro', component: RegistroComponent
      },
      {
        path:'consulta', component: ConsultaComponent
      },
      {
        path:'carga-masiva', component: CargaMasivaComponent
      },
      {
        path:'reportes/reporteador', component: ReporteadorComponent
      },
      {
        path:'reportes/ordenar', component: OrdenarReporteComponent
      },
      {
        path:'reportes/exportar', component: ExportarReporteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
