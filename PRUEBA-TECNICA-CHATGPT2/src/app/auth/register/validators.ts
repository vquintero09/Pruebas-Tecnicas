import { AbstractControl, ValidationErrors } from "@angular/forms";

export const customAgeValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;

  if(value === null || isNaN(value)) {
    return {customAgeValidator: true}
  }

  return value < 18 ? {customAgeValidator: true} : null
};


export const customPasswordValidation = (control: AbstractControl): ValidationErrors | null => {
  // Expresión regular que validará si la contraseña contiene al menos una minuscula, una mayuscula y una longitud mayor o igual a 8
  const patternPassword = new RegExp('(^(?=.*[a-z])(?=.*[A-Z]).{8,}$)');

  const passwordControl = control.value

  return !patternPassword.test(passwordControl)? {customPassword: true} : null
};


export const crossPasswordMatchingValidator = (control: AbstractControl<{password: string, confirmPassword: string}>): ValidationErrors | null => {
  const passwordControl = control.value.password;
  
  const confirmPasswordControl = control.value.confirmPassword;

  return passwordControl !== confirmPasswordControl ? {crossPasswordMatchingValidator: true} : null
}