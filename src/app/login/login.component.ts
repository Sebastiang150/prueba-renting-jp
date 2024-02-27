import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IndexedDBService } from '../transversal/indexed-db.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(
    private indexedDb: IndexedDBService,
    private router: Router
  ) { }
  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
    this.validateIsLogin();
  }

  validateIsLogin(): void {
    if (sessionStorage.getItem('access_token') === 'true') {
      this.router.navigate(['/administracion']);
    }
  }

  initForm(): void {
    this.formLogin = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(): void {


    this.indexedDb.getUser(this.formLogin.value).then((item: boolean) => {
      if (item) {
        sessionStorage.setItem('access_token', 'true');
        this.router.navigate(['/administracion']);
      } else {
        Swal.fire({ title: 'No se pudo acceder', text: 'Usuario o contraseña incorrectos', timer: 5000, icon: 'warning' });
        sessionStorage.setItem('access_token', 'false');
      }
    }).catch((err) => {
      this.indexedDb.reset();
      Swal.fire({ title: 'Problemas internos', text: 'El usuario no pudo ser vereficado', timer: 5000, icon: 'error' });
    });

    // sessionStorage.setItem('access_token', 'true');
    // this.http.post(this.api + '/UserAccount/login', this.formLogin.value).subscribe({
    //   next: (responseLogin: ResponseLogin) => {
    //     if (Utilities.isNotNull(responseLogin.token)) {
    //       sessionStorage.setItem('access_token', responseLogin.token as string);
    //       sessionStorage.setItem('userName', responseLogin.fullName as string);
    //       sessionStorage.setItem('roleName', responseLogin.roleName as string);
    //       sessionStorage.setItem('roleId', responseLogin.roleId as string);
    //       this.router.navigate(['/']);
    //     }
    //     else {
    //       this.messagesService.showMessage({ title: 'Invalid_Token', icon: 'error', confirmButtonText: 'Accept' });
    //     }
    //   },
    //   error: () => {
    //     this.messagesService.showMessage({ title: 'User_Invalid', icon: 'error', confirmButtonText: 'Accept' });
    //   }
    // });
  }

  getFormControl(control: string) {
    return this.formLogin.get(control);
  }
}
