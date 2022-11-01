import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { Medico } from 'src/app/model/medico.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { MedicoService } from 'src/app/services/medico.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit, OnDestroy {
  public cargando : boolean = true;
  public medicos : Medico[] = [];
  private imgSubs !: Subscription;
  constructor(private  medicoService : MedicoService,
              private modalImagenService : ModalImagenService,
              private busquedaService : BusquedasService) { }
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe()
  }

  ngOnInit(): void {
    this.cargarMedicos()


    this.imgSubs =  this.modalImagenService.nuevaImagen
    .pipe(
      delay(100)
    )
    .subscribe(img =>this.cargarMedicos())
  }

  cargarMedicos(){
    this.cargando = true
    this.medicoService.cargarMedicos()
        .subscribe(medicos => {

          this.cargando = false;
          this.medicos = medicos
        })
  }

  buscar(termino : string){
    console.log('a')
    if (termino.length === 0) {
      return this.cargarMedicos();
    }
    this.busquedaService.buscar('medicos', termino).subscribe((resp) => {
      console.log('4')
      console.log(resp)
      this.medicos = resp as Medico[];
    });
  }


  abrirModal(medico : Medico){

    this.modalImagenService.abrirModal('medicos', medico._id || ''  ,medico.img)
  }

  borrarMedico(medico : Medico){
    Swal.fire({
      title: 'Are you sure?',
      text: `Esta a punto de borrar a ${medico.nombre}`,
      icon: 'question',
      showCancelButton: true,

      confirmButtonText: 'Si, Borrarlo',
    }).then((result) => {
      if (result.value) {
        this.medicoService.borrarMedico(medico._id!).subscribe((resp) => {
          this.cargarMedicos();
          Swal.fire(
            'Medico borrado',
            `${medico.nombre} fue eliminado correctamente`,
            'success'
          );
        });
      }
    });
    }

}
