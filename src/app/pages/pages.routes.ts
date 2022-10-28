import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProgressComponent } from './progress/progress.component';



const routes: Routes = [
    {
      path : 'dashboard',
      component : PagesComponent,
      children : [
        {path : '', component : DashboardComponent, data : {titulo : 'Dashboard'}},
        {path : 'account-settings',component : AccountSettingsComponent, data : {titulo : 'Account-settings'}},
        {path : 'graficas',component : GraficaComponent, data : {titulo : 'Graficas'}},
        {path : 'progress',component :ProgressComponent, data : {titulo : 'Progress' }}
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
