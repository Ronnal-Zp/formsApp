import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivesRoutingModule } from './reactives-routing.module';
import { BasicosComponent } from './components/basicos/basicos.component';
import { DinamicosComponent } from './components/dinamicos/dinamicos.component';
import { SwitchesComponent } from './components/switches/switches.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactivesRoutingModule
  ]
})
export class ReactivesModule { }
