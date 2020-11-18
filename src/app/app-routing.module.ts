import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('projects/auth/src/lib/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('projects/pages/src/lib/pages.module').then(m => m.PagesModule),
  },
  {
    path: '**',
    redirectTo: 'mis-asuntos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
