import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Env } from '../../interfaces/env.interface';
import { LoginResponse } from '../../interfaces/response.interface';
import { UserInformation } from '../../interfaces/UserInformation.interface';
import { EnvAuthService } from '../env/env.service';

interface BodyLoginWithRole {
  employeeNumber: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private settings: Env;

  public menus: Subject<any>;

  public menus$: Observable<any>;

  private role: Subject<string>;

  public role$: Observable<string>;

  private roles: Subject<string>;

  public roles$: Observable<string>;

  constructor(
    private env: EnvAuthService,
    private router: Router,
    private http: HttpClient
  ) {
    this.menus = new Subject<any>();
    this.menus$ = this.menus.asObservable();
    this.role = new Subject<string>();
    this.role$ = this.role.asObservable();
    this.roles = new Subject<any>();
    this.roles$ = this.roles.asObservable();
    this.settings = this.env.getProperties();
  }

  builldRedirecToMasterKeyRequest(): void {
    const uri =
      `${this.settings.MASTER_KEY_URL}` +
      `response_type=code&` +
      `client_id=${this.settings.CLIENT_ID}&` +
      `client_secret=${this.settings.CLIENT_SECRET}&` +
      `redirect_uri=${this.settings.URL_REDIRECT}&` +
      `scope=${this.settings.SCOPE}&` +
      `acr_values=${this.settings.ACR_VALUES}`;
    window.location.href = `${uri}`;
  }

  public login(): void {
    const body = {
      grant_type: 'authorization_code',
      client_id: `${this.settings.CLIENT_ID}`,
      client_secret: `${this.settings.CLIENT_SECRET}`,
      redirect_uri: `${this.settings.URL_REDIRECT}`,
      code: `${sessionStorage.getItem('MK_CODE')}`
    };
    if (!sessionStorage.getItem('TOKEN_CORE')) {
      this.http.post<LoginResponse>(`${this.settings.CORE}login`, body).pipe(
        tap(data => this.setSession(data))
      ).subscribe(data => {
        this.menus.next(data.respuesta.userInformation);
        this.roles.next(JSON.parse(sessionStorage.getItem('UI_CORE')).roles);
        this.core();
      });
    } else {
      this.menus.next(JSON.parse(sessionStorage.getItem('UI_CORE')));
      this.roles.next(JSON.parse(sessionStorage.getItem('UI_CORE')).roles);
      this.core();
    }
  }

  loginWithRole(bodyLoginWithRole: BodyLoginWithRole): void {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('TOKEN_CORE')}`
    });
    this.http.post<LoginResponse>(`${this.settings.CORE}login`, bodyLoginWithRole, { headers }).subscribe(data => {
      sessionStorage.setItem('TOKEN_CORE', `${data.respuesta.tokenInformation.token}`);
      sessionStorage.setItem('TOKEN_EXPIRATION_CORE', `${data.respuesta.tokenInformation.expirationDate}`);
      const userInformation: UserInformation = JSON.parse(sessionStorage.getItem('UI_CORE'));
      userInformation.menuOptions = data.respuesta.userInformation.menuOptions;
      sessionStorage.setItem('UI_CORE', `${JSON.stringify(userInformation)}`);
      this.menus.next(userInformation);
      this.router.navigate(['consulta']);
    });
  }

  logout(): void {
    setTimeout(() => { sessionStorage.clear(); });
    window.location.href = `${this.settings.LOGOUT}`;
  }

  setSession(data: LoginResponse) {
    if (data.respuesta.roleEstatus === 0) {
      sessionStorage.setItem('ROLE_CORE', `${data.respuesta.roleEstatus}`); return;
    } else {
      sessionStorage.setItem('ROLE_CORE', `${data.respuesta.roleEstatus}`);
    }
    sessionStorage.setItem('TOKEN_CORE', `${data.respuesta.tokenInformation.token}`);
    sessionStorage.setItem('TOKEN_EXPIRATION_CORE', `${data.respuesta.tokenInformation.expirationDate}`);
    this.role.next(sessionStorage.getItem('ROLE_CORE'));
    sessionStorage.setItem('UI_CORE', `${JSON.stringify(data.respuesta.userInformation)}`);
    return data;
  }

  forceMenu() { this.menus.next(JSON.parse(sessionStorage.getItem('UI_CORE'))); }

  forceRoles() { this.roles.next(JSON.parse(sessionStorage.getItem('UI_CORE')).roles); }

  core() {
    switch (sessionStorage.getItem('ROLE_CORE')) {
      case '1': this.router.navigate(['consulta']); break;
      default: return;
    }
  }
}
