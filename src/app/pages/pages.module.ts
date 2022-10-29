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
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    GraficaComponent,
    ProgressComponent,
    AccountSettingsComponent,
    DashboardComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    ReactiveFormsModule
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
