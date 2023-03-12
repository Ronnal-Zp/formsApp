import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss']
})
export class DinamicosComponent {

  @ViewChild('myForm') myForm!: NgForm;
  nuevoFavorito: string = '';

  persona: Persona = {
    nombre: "Aldahir Zamora",
    favoritos: [
      { id: 1, nombre: 'God of War'},
      { id: 2, nombre: 'GTA San Andreas' }
    ]
  }


  /**
   * Post del formulario
   */
  enviar() {
    console.log('Formulario posteado');
    console.log(this.myForm.value);
  }

  /**
   * Agregar favorito
   */
  agregarFavorito() {
    const favorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    }

    this.persona.favoritos.push( {...favorito} )
    this.nuevoFavorito = '';
  }

  /**
   * Elimiar favorito
   * @param index 
   */
  elimiarFavorito(index: number) {
     this.persona.favoritos.splice(index, 1);
  }

  /**
   * Validar campo persona
   * @returns 
   */
  isValidPersona(): boolean {
    return this.myForm?.controls['persona']?.invalid && this.myForm?.controls['persona']?.touched
  }

}
