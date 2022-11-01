import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProgressComponent } from './progress/progress.component';
import { AuthGuard } from '../guards/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';


//Mantenimiento
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';



const routes: Routes = [
    {
      path : 'dashboard',
      component : PagesComponent,
      canActivate : [AuthGuard],
      children : [
        {path : '', component : DashboardComponent, data : {titulo : 'Dashboard'}},
        {path : 'account-settings',component : AccountSettingsComponent, data : {titulo : 'Account-settings'}},
        {path : 'graficas',component : GraficaComponent, data : {titulo : 'Graficas'}},
        {path : 'progress',component :ProgressComponent, data : {titulo : 'Progress' }},
        {path: 'perfil',component : PerfilComponent, data : {titulo : 'Perfil de Usuario'}},

        //Mantenimientos
        {path : 'usuarios',component: UsuariosComponent,data : {titulo : 'Mantenimiento de usuarios'}},
        {path : 'hospitales',component:HospitalesComponent,data : {titulo : 'Mantenimiento de hospitales'}},
        {path : 'medicos',component: MedicosComponent,data : {titulo : 'Mantenimientos de medicos'}},
        {path : 'medico/:id',component: MedicoComponent, data: {titulo :'Mantenimiento de medico'}}/* Al tener mas de dos campos haremos uno independiente*/
      ]
    }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
