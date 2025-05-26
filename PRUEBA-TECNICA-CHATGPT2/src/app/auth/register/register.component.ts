import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { crossPasswordMatchingValidator, customAgeValidator, customPasswordValidation } from './validators';
import { UserService } from '@core/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private readonly _router = inject(Router);
  private _userService = inject(UserService)
  subbmit: boolean = false

  ngOnInit(): void {
   
  }

  registerForm = this._formBuilder.group(
    {
      name: ['', Validators.required],
      age: [0, [Validators.required, customAgeValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [customPasswordValidation ,Validators.required ]],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: [crossPasswordMatchingValidator]
    }
  );


  register() {
    //Si el formulario es valido llamos al servico para hacer una simulación de una peticion al servidor
    if(this.registerForm.valid) {
      setTimeout(() => {
        this.subbmit = false;
        const {name, age, email, password} = this.registerForm.getRawValue();
        this._userService.register({name, age, email, password});
        this._router.navigateByUrl('/confirmation')
      }, 1500)
     
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control ? control.hasError(errorName) : false
  };

  onSubmit() {
    this.subbmit = true
    this.register()
  };
}
