import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public usuario !: Usuario;
  /* public imgUrl = ''; */
  menuesSideBar : any[] = [];
  constructor(private sidebarService : SidebarService,
              private usuarioService : UsuarioService) {
    this.menuesSideBar = this.sidebarService.menuSidebar
   /*  this.imgUrl = this.usuarioService.usuario.imageUrl */
      this.usuario = usuarioService.usuario          

  }

  ngOnInit(): void {
  }

  /* logout(){
    this.usuarioService.logout()
  } */

}
