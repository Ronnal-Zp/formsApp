import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public form: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern ) ]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern ) ]],
    username: ['', [ Validators.required, this.validatorsService.cantBeRonald ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]]
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) { }

  public onSubmit(): void {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
  }

  public isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.form, field);
  }

}
