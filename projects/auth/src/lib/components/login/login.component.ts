import { LoaderService } from './../../services/loader/loader.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  private params: Params;

  role: string;

  roles: any;

  profilesDefined: boolean;

  constructor(
    private loader: LoaderService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    public authLogin: AuthService,
    private fb: FormBuilder
    ) {

    this.form = this.fb.group({
      user: [ { value: 'Arturo Hernández Medero', disabled: true }, [ Validators.required ]],
      role: [ '', [Validators.required] ]
    });

    this.profilesDefined = true;

    this.roles = [];

    this.authLogin.roles$.subscribe( roles => {
      this.roles = roles;
      this.profilesDefined = true;
      this.loader.setLoader(false);
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
      this.loader.setLoader(true);
      this.authLogin.login();
      this.profilesDefined = true;
      if (sessionStorage.getItem('UI_CORE')){
        const UI_CORE = JSON.parse(sessionStorage.getItem('UI_CORE'));
        this.form.get('user').setValue(`${UI_CORE.userName} ${UI_CORE.paternalName} ${UI_CORE.maternalName}`);
        this.roles = JSON.parse(sessionStorage.getItem('UI_CORE')).roles;
        this.authLogin.forceRoles();
        this.profilesDefined = true;
      } else {
        this.profilesDefined = false;
      }
    }
    this.cdr.detectChanges();
  }

  redirectToMasterKey() {
      this.authLogin.builldRedirecToMasterKeyRequest();
  }

  loginWithRoleSelected() {
    if (! this.form.valid ) { return; }
    this.loader.setLoader(true);
    this.authLogin.loginWithRole({
      employeeNumber: `${JSON.parse(sessionStorage.getItem('UI_CORE')).employeeNumber}`,
      role: this.form.get('role').value });
  }
}
