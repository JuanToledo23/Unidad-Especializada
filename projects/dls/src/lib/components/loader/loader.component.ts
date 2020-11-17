import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div>
              <div class="modal-mask"></div>
              <div class="recuadroLoader">
                  <div class="loader"></div>
                  <div class="LetraLoader">{{ customTitle }}</div>
              </div>  
            </div>`
})
export class LoaderComponent {
  @Input()
  customTitle: string = 'Cargando...';
}