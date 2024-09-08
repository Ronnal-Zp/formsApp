import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder) { }


  public isValidField(field: string): boolean | null {
    return this.form.controls[field].errors && this.form.controls[field].touched
  }

  public getMessageError(field: string): string {
    if( !this.form.controls[field] ) return '';

    const errors = this.form.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido.';

        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }

    return '';
  }

  public onSave(): void {
    if(this.form.invalid) return;

    console.log(this.form.value);

    this.form.reset({price: 0, inStorage: 0})
  }


}
