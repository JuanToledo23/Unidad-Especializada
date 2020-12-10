import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@NgModule({
  exports: [
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatExpansionModule,
    MatNativeDateModule,
    DragDropModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatCheckboxModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX'}
  ]
})
export class MaterialModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "ico-calendario",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoCalendario.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-agregar-blanco",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoAgregarBlanco.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-agregar-negro",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoAgregarNegro.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-guardar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoGuardar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-excel",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoExcel.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-limpiar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoLimpiar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-eliminar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoEliminar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-expandir",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoExpandir.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-contraer",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoContraer.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-agregar-verde",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoAgregarVerde.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-deshabilitar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoDeshabilitar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "ico-habilitar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/img/icoHabilitar.svg")
    );
  }
}
