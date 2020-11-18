import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { MisAsuntosComponent } from './components/mis-asuntos/mis-asuntos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'registro', component: RegistroComponent
      },
      {
        path: 'consulta', component: MisAsuntosComponent
      },
      {
        path: 'consulta/:caseId', component: ConsultaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
