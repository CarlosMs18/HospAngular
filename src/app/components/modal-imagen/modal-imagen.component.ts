import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {

 /*  public ocultarModal : boolean = false; */
 public imagenSubir !: File;
  public imgTemp : any = '';
  constructor(public modalImagenService : ModalImagenService,
              public fileUploadedService : FileUploadService) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.imgTemp = null;
    this.modalImagenService.cerrarModal()
  /*   this.ocultarModal = true; */
  }

  cambiarImagen(file : File){
    this.imagenSubir = file;

    if(!file){
      this.imgTemp = null
      return;
    }

    const reader = new FileReader();
   reader.readAsDataURL(file);

    reader.onloadend = () => {
        this.imgTemp = reader.result

    }
  }




  subirImagen(){
    console.log('a')
    const id= this.modalImagenService.id
    const tipo = this.modalImagenService.tipo

    this.fileUploadedService.actualizarFoto(this.imagenSubir, tipo,id)
          .then( img => {

            Swal.fire('Guardado','Imagen de usuario actualizada','success')
            this.modalImagenService.nuevaImagen.emit(img)
            this.cerrarModal()
          }).catch(err => {
            console.log('a')
            /* Swal.fire('Error',err.error.msg, 'error') */
            console.log(err)
          })
  }

}
