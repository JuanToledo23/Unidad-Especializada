import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  exports: [
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX'}
  ]
})
export class MaterialModule {}
