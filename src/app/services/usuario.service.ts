import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interface/register-form.interface';
import { tap } from 'rxjs';
import { LoginForm } from '../interface/login-form.interface';


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

  loginUsuario(userData : LoginForm){
    return this.http.post(`${this.base_url}/login`,userData)
                            .pipe(
                              tap((resp : any)=> {
                                localStorage.setItem('token',resp.token)
                              })
                            )
  }
}
