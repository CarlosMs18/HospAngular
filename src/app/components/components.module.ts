import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AumentadorComponent } from './aumentador/aumentador.component';



@NgModule({
  declarations: [
    AumentadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    AumentadorComponent
  ]
})
export class ComponentsModule { }
