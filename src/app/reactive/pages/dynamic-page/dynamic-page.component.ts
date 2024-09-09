import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public form: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    favoriteGames: this.fb.array([
      ['PvZ Warfare', [ Validators.required ]],
      ['PUBG', [ Validators.required ]]
    ])
  });

  public newFavorite: FormControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {}

  public onSubmit() {

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.form.reset();
    this.favoriteGames.clear();
  }

  get favoriteGames() {
    return this.form.controls['favoriteGames'] as FormArray;
  }

  public isValidField(field: string): boolean | null {
    return this.form.controls[field].errors && this.form.controls[field].touched
  }

  public isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return formArray.controls[index].errors && formArray.controls[index].touched
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

  public onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  public addFavoriteGame() {
    if(this.newFavorite.invalid) return;
    const value = this.newFavorite.value;

    this.favoriteGames.push(
      this.fb.control(value, [ Validators.required ])
    );

    this.newFavorite.reset();
  }

}
