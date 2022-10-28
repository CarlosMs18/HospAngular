import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interface/register-form.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { LoginForm } from '../interface/login-form.interface';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private base_url = environment.base_url
  constructor(private http : HttpClient,
              private router :Router) { }

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


  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login')

  }


  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ this.base_url }/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      catchError( error => of(false) )
    );

  }


}
