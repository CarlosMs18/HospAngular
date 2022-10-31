import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuSidebar  : any[] = [
    {
      titulo : 'Dashboard',
      submenu : [
        {path : '', subtitle : 'Dashboard'},
        {path : 'account-settings',subtitle : 'Account-Settings'},
        {path : 'graficas',subtitle : 'Grafica'},
        {path : 'progress',subtitle : 'Progress'}
      ]
    },
    {
      titulo : 'Mantenimiento',
      submenu : [
        {path : 'usuarios', subtitle : 'Usuarios'},
        {path : 'Hospitales',subtitle : 'Hospitales'},
        {path : 'Medicos',subtitle : 'Medicos'}

      ]
    }
  ]
  constructor() { }



}
