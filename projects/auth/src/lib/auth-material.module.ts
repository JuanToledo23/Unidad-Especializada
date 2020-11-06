import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AuthMaterialModule { }
