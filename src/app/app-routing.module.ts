import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routes';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PagesRoutingModule } from './pages/pages.routes';

const routes: Routes = [
  {path: '' , redirectTo : '/dashboard',pathMatch : 'full'},
  {path : '**',component : PagenotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
