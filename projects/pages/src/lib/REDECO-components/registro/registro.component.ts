import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService, MisAsuntosService } from 'dls';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class REDECORegistroComponent implements OnInit, AfterViewInit, OnDestroy {

  panelOpenState = false;
  private subscriber: any;

  constructor(public headerService: HeaderService, private router: Router, private route: ActivatedRoute, public misAsuntosService: MisAsuntosService) {}

  ngOnInit(): void {
    this.subscriber = this.route.params.subscribe(params => {
      this.misAsuntosService.asuntoActivo = this.misAsuntosService.ASUNTOS_PENDIENTES.find((obj: {id:number}) => obj.id === +params.id);
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.titulo = 'Registro';
    });
  }

  goConsulta() {
    this.router.navigate(['/analista/consulta']);
  }

}