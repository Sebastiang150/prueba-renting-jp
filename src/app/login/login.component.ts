import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formLogin = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(): void {
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
