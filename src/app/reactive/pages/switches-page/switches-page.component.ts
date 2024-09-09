import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent {

  public form: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    wantNotidications: [true, [Validators.required]],
    termsAndConditions: [false, [Validators.requiredTrue]]
  });

  constructor(private fb: FormBuilder) { }

  public onSubmit(): void {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
  }

  public isValidField(field: string): boolean | null {
    return this.form.controls[field].errors && this.form.controls[field].dirty
  }

}
