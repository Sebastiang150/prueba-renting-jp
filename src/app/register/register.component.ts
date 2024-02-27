import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { IndexedDBService } from '../transversal/indexed-db.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  constructor(private indexedDb: IndexedDBService) { }

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
    this.indexedDb.updateUser(this.formRegister.value).then(() => {
      this.formRegister.reset();
    }).catch((err) => {
      Swal.fire({ title: 'Problemas internos', text: 'El usuario no pudo ser registrado', timer: 5000, icon: 'error' });
    });
  }

  getFormControl(control: string) {
    return this.formRegister.get(control);
  }
}
