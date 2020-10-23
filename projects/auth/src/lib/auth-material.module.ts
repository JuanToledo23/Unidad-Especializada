import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatRadioModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class AuthMaterialModule { }
