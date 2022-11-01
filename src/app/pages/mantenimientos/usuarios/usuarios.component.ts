import { Component, OnDestroy, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { Usuario } from 'src/app/model/usuario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [],
})
export class UsuariosComponent implements OnInit, OnDestroy {
  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];
  public usuariosTemp: Usuario[] = [];
  public desde: number = 0;
  public cargando: boolean = true;

  public imgSubs!: Subscription;
  constructor(
    private usuarioService: UsuarioService,
    private busquedaService: BusquedasService,
    private modalImagenService : ModalImagenService
  ) {}


  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarUsuarios();

    this.imgSubs =  this.modalImagenService.nuevaImagen
        .pipe(
          delay(100)
        )
        .subscribe(img =>this.cargarUsuarios())
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService
      .cargarUsuarios(this.desde)
      .subscribe(({ total, usuarios }) => {
        this.totalUsuarios = total;

        /* if(usuarios.length !== 0 ){
              this.usuarios = usuarios;
            } */
        this.usuarios = usuarios;
        this.usuariosTemp = usuarios;
        this.cargando = false; //cuando ya tenga la respuesta
      });
  }

  cambiarPagina(valor: number) {
    this.desde += valor;

    if (this.desde < 0) {
      this.desde = 0;
    } else if (this.desde > this.totalUsuarios) {
      this.desde -= valor;
    }

    this.cargarUsuarios();
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      return (this.usuarios = this.usuariosTemp);
    }
    this.busquedaService.buscar('usuarios', termino).subscribe((resp) => {
      this.usuarios = resp as Usuario[];
    });
  }

  eliminarUsuario(usuario: Usuario) {

    if(usuario.uid === this.usuarioService.uid){
        return Swal.fire('Error','No se puede borrarse a si mismo')
    }

    Swal.fire({
      title: 'Are you sure?',
      text: `Esta a punto de borrar a ${usuario.nombre}`,
      icon: 'question',
      showCancelButton: true,

      confirmButtonText: 'Si, Borrarlo',
    }).then((result) => {
      if (result.value) {
        this.usuarioService.eliminarUsuario(usuario).subscribe((resp) => {
          this.cargarUsuarios();
          Swal.fire(
            'Usuario borrado',
            `${usuario.nombre} fue eliminado correctamente`,
            'success'
          );
        });
      }
    });
  }


  cambiarRole(usuario: Usuario){
      this.usuarioService.guardarUsuario(usuario)
              .subscribe( resp => {
                  console.log(resp)
              })
  }


  abrirModal(usuario:Usuario){
    this.modalImagenService.abrirModal('usuarios',usuario.uid || '',usuario.img)

  }
}
