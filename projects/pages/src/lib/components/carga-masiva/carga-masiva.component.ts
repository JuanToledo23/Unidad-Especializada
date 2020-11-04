import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeaderService } from 'dls';

@Component({
  selector: 'app-carga-masiva',
  templateUrl: './carga-masiva.component.html',
  styleUrls: ['./carga-masiva.component.scss']
})
export class CargaMasivaComponent implements OnInit, AfterViewInit {

  panelOpenState = false;

  constructor(public headerService: HeaderService) {}

  file = [
    { id: 'fileX', label: 'Selecciona archivo', name: 'ADJUNTAR ARCHIVO', estatus: false }
  ];

  yourVariable = "Procesando el archivo...";

  handleFileInput(loadedFile) {
      const selectedFile = this.file[0]
      selectedFile.estatus = true;
      selectedFile.name = loadedFile[0].name;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Carga masiva casos';
    });
  }

}