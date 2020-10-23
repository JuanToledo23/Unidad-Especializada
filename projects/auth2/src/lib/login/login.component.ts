import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() change: EventEmitter<MatRadioChange> 

  constructor(
    public loginService: LoginService,
    private router: Router) {
    this.show = false;
  }

  show :boolean=false;
  msg : string;
  msg2 : string;
  msgBloq :string;
  flgEnviandoForm : boolean = false;
  checking: boolean = false;
  usrValid: any = {};
  usrData: any = {};
  paisesUsr = [];
  paisSelected: number = 0;
  rolesUsr = [];
  rolSelected: number = 0;
  rolSelectedDesc : string = '';
  Correo : any ='';
  usrLogC: boolean = true;
  ultimaFechaAcceso : string = '';
  usrNameAccess : string = '';
  flagInicioSesionByUser :boolean = false;
  flagInicioSesionByMasterKey :boolean = false;

  ngOnInit(): void { }

  usrLogCheck(): boolean {
    let usrLogCheck = false;
    if (this.paisSelected > 0 && this.rolSelected > 0) {
      usrLogCheck = true;
    }
    return usrLogCheck;
  }

  showPassword(){
    this.show = true;
  }

  hiddenPassword(){
    this.show =false;
  }

  iniciarSesion() {
    this.router.navigate(['/analista/mis-asuntos']);
  }

  cleanMsg(){
    this.msg = null;
  }

  cleanMsg2(){
    this.msg = null;
    this.msg2= null;
    this.msgBloq=null;
  }

  changeValues(){
    this.usrValid = {};
    this.paisesUsr = [];
    this.rolesUsr = [];
    this.paisSelected = 0;
    this.rolSelected = 0;
    this.rolSelectedDesc = '';
    this.usrLogC = this.usrLogCheck();
  }

  onChange(mrChange: MatRadioChange) {
    let mrButton: MatRadioButton = mrChange.source;
    if(mrChange.value=="1" && mrButton.checked){
      this.flagInicioSesionByMasterKey=true;
      this.flagInicioSesionByUser=false;
    }else{
      this.flagInicioSesionByUser=true;
      this.flagInicioSesionByMasterKey=false;
    }
  }

}
