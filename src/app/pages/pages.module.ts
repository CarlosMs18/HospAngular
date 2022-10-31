import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficaComponent } from './grafica/grafica.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';



@NgModule({
  declarations: [
    PagesComponent,
    GraficaComponent,
    ProgressComponent,
    AccountSettingsComponent,
    DashboardComponent,
    PerfilComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PagesComponent,
    GraficaComponent,
    ProgressComponent,
    AccountSettingsComponent,
    DashboardComponent
  ]

})
export class PagesModule { }
