import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formRegister = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required])
    }, { validators: this.checkPasswords });
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('repeatPassword')?.value
    return pass === confirmPass ? null : { notEqual: true }
  }

  register(): void {
    // this.http.post(this.api + '/UserAccount/register', this.formRegister.value).subscribe({
    //   next: () => {
    //     this.router.navigate(['/login']);
    //   }
    // });
  }

  getFormControl(control: string) {
    return this.formRegister.get(control);
  }
}
