import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private params: Params;

  role: string;

  roles: any;

  profilesDefined: boolean;

  // tslint:disable-next-line: no-output-native
  @Output() change: EventEmitter<MatRadioChange>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public authLogin: AuthService,
    private router: Router
    ) {

    this.profilesDefined = true;

    this.roles = [];

    this.authLogin.roles$.subscribe( roles => {
      this.roles = roles;
      this.profilesDefined = true;
    });

    this.role = sessionStorage.getItem('ROLE_CORE') ? sessionStorage.getItem('ROLE_CORE') : '-1';

    this.params = this.activatedRoute.snapshot.queryParams;

    if (Object.keys(this.params).length === 0) {
      return;
    } else {
      sessionStorage.setItem('MK_CODE', this.params.code);
      sessionStorage.setItem('MK_SCOPE', this.params.scope);
    }
  }

  ngOnInit(): void {
    if ( sessionStorage.getItem('MK_CODE') && sessionStorage.getItem('MK_SCOPE') ) {

      this.authLogin.login();

      this.profilesDefined = true;

      if (sessionStorage.getItem('UI_CORE')){
        this.roles = JSON.parse(sessionStorage.getItem('UI_CORE')).roles;
        this.authLogin.forceRoles();
        this.profilesDefined = true;
      } else {
        this.profilesDefined = false;
      }
    }
    this.cdr.detectChanges();
  }

  onChange(mrChange: MatRadioChange) {
    // const mrButton: MatRadioButton = mrChange.source;
    // if ( mrChange.value === 'master-key' && mrButton.checked ) {
    //   this.authLogin.builldRedirecToMasterKeyRequest();
    // }
    this.router.navigate(['/analista/mis-asuntos']);
  }

  roleSelected( matSelectChange: MatSelectChange ) {
    this.authLogin.loginWithRole({
      employeeNumber: `${JSON.parse(sessionStorage.getItem('UI_CORE')).employeeNumber}`,
      role:  matSelectChange.value });
  }
}
