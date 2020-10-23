import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('projects/auth/src/lib/auth.module').then(m => m.AuthModule),
  },
  { 
    path: 'analista',
    loadChildren: () => import('projects/pages/src/lib/pages.module').then(m => m.PagesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
