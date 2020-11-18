import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HeaderService } from 'dls';

@Component({
  selector: 'pages-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, AfterViewInit {

  panelOpenState = false;

  constructor(public headerService: HeaderService) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Registro';
    });
  }

}
