import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  @ViewChild('myForm') myForm!: NgForm;

  enviar() {
    console.log(this.myForm);
    
    this.myForm.resetForm({
      nombre: 'Ninguno',
      precio: 0,
      existencia: 0
    });
  }

  isValidNombre(): boolean {
    return this.myForm?.controls['nombre']?.invalid && 
           this.myForm?.controls['nombre']?.touched
  }

  isValidPrecio(): boolean {
    return this.myForm?.controls['precio']?.touched &&
           (this.myForm?.controls['precio']?.value < 0 || !this.myForm?.controls['precio']?.value)
  }

  isValidExistencia(): boolean {
    return this.myForm?.controls['existencia']?.touched && this.myForm?.controls['existencia']?.invalid
  }

}
