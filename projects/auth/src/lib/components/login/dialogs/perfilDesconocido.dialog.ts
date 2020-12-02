import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'perfil-desconocido',
    templateUrl: './perfilDesconocido.dialog.html'
})
export class PerfilDesconocidoDialog {
    constructor(public dialogRef: MatDialogRef<PerfilDesconocidoDialog>) {}
}