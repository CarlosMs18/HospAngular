import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interface/register-form.interface';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private base_url = environment.base_url
  constructor(private http : HttpClient) { }

  crearUsuario(userData : RegisterForm){
    return this.http.post(`${this.base_url}/usuarios`, userData)
                    .pipe(
                      tap((resp : any)=> {
                              localStorage.setItem('token',resp.token)
                      })
                    )
  }
}
