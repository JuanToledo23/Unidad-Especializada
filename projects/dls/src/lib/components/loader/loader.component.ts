import { Component, Input } from '@angular/core';

@Component({
  selector: 'dls-loader',
  styleUrls: [ './loader.component.scss' ],
  template: `<div>
              <div class="modal-mask"></div>
              <div class="recuadroLoader">
                  <div class="loader"></div>
                  <div class="LetraLoader">{{ customTitle }}</div>
              </div>
            </div>`
})
export class LoaderComponent {
  @Input() customTitle: string;
  constructor() {
    this.customTitle = 'C a r g a n d o . . .';
  }
}
