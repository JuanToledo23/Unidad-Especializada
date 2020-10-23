import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
