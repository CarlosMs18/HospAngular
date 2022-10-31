import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AumentadorComponent } from './aumentador/aumentador.component';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';



@NgModule({
  declarations: [
    AumentadorComponent,
    ModalImagenComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    AumentadorComponent,
    ModalImagenComponent
  ]
})
export class ComponentsModule { }
