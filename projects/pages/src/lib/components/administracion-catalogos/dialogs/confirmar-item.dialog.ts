import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'confirmar-item',
    templateUrl: './confirmar-item.dialog.html'
})
export class ConfirmarItemDialog implements OnInit  {
    constructor(public dialogRef: MatDialogRef<ConfirmarItemDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {}
    showDialog = '';
    ngOnInit() {
        console.log(this.data);
        this.showDialog = this.data.catalogo.name;
    }
}