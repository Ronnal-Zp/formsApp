import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {

  @ViewChild('myForm') myForm!: NgForm;
  persona = {
    genero: 'F',
    terminoYcondiciones: true,
    notificaiones: false
  }

  enviar() {
    console.log(this.myForm);
  }
}
