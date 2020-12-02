import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HeaderService } from 'dls';

@Component({
  selector: 'app-administracion-catalogos',
  templateUrl: './administracion-catalogos.component.html',
  styleUrls: ['./administracion-catalogos.component.scss']
})
export class AdministracionCatalogosComponent implements OnInit, AfterViewInit {

  constructor(public headerService: HeaderService, public dialog: MatDialog) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Administración de catálogos';
    });
  }

}
