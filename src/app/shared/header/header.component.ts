import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  /* public imgUrl = ''; */
  public usuario !: Usuario;
  constructor(private usuarioService : UsuarioService) {
    /* this.imgUrl = this.usuarioService.usuario.imageUrl */
    this.usuario = usuarioService.usuario
    /* console.log(this.imgUrl) */
   }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioService.logout()
  }
}
