import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';


interface UserInformation {
  email?: string;
  employeeNumber: string;
  userName: string;
  paternalName: string;
  maternalName: string;
  menuOptions?: MenuOptionResponse;
  roles?: Role[];
}

interface MenuOptionResponse extends Response {
  respuesta: MenuOption[];
}

interface MenuOption {
  levelCoord: string;
  menuId: string;
  menuName: string;
  parentId: string;
  subMenus: MenuOption[];
  url: string;
}

interface Role {
  key: number;
  value: string;
  generateGroup: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  fechaHora = [];
  wasInside: boolean;

  showMenu = false;

  UI_CORE: UserInformation;

  name: string;

  lastname: string;

  profile: string;

  constructor(public headerService: HeaderService, private router: Router) {
    this.name = 'No disponible';
    this.lastname = '';
    this.profile =  'No disponible';
    this.headerService.myObservable.subscribe(data => {
      this.fechaHora = data;
    });
  }

  ngOnInit() {
    this.UI_CORE = JSON.parse(sessionStorage.getItem('UI_CORE'));

    if ( this.UI_CORE && this.UI_CORE.userName && this.UI_CORE.paternalName && this.UI_CORE.maternalName ) {
      this.name = `${this.UI_CORE.userName}`;
      this.lastname = `${this.UI_CORE.paternalName} ${this.UI_CORE.maternalName}`;
      this.profile = `${this.UI_CORE.roles[0].value}`;
    }

  }

  goMisAsusntos() {
    this.router.navigate(['/analista/mis-asuntos']);
  }
  goRegistro() {
    this.router.navigate(['/analista/registro']);
  }
  goCargaMasiva() {
    this.router.navigate(['/analista/carga-masiva']);
  }

  menuButtonClick() {
    this.showMenu = !this.showMenu;
  }
  
  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }
  
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.showMenu = false;
    }
    this.wasInside = false;
  }

}