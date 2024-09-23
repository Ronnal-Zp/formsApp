import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeRonald = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    if(value == 'ronald') {
      return {
        noRonald: true
      }
    }

    return null;
  }

  public isValidField(form: FormGroup, field: string): boolean | null {
    return form.controls[field].errors && form.controls[field].touched;
  }

  public isFieldOneEqualFieldTwo(field1: string, field2: string) {

    return (form: AbstractControl): ValidationErrors | null => {
      const fieldValue1 = form.get(field1)?.value;
      const fieldValue2 = form.get(field2)?.value;

      if(fieldValue1 !== fieldValue2) {
        form.get(field2)?.setErrors({notEqual: true});
        return {notEqual: true};
      }

      form.get(field2)?.setErrors(null);
      return null;
    }

  }

}
