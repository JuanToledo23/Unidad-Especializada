import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthMaterialModule } from './auth-material.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { PerfilDesconocidoDialog } from './components/login/dialogs/perfilDesconocido.dialog';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    AuthMaterialModule
  ],
  providers: [
    CommonModule,
    AuthService,
  ],
  declarations: [PerfilDesconocidoDialog],
  exports: [RouterModule],
  entryComponents: [PerfilDesconocidoDialog]
})
export class AuthModule { }
