import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interface/register-form.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { LoginForm } from '../interface/login-form.interface';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: Usuario;

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
      map( (resp: any) => {
        console.log(resp)
        const {email,google, nombre, role, uid, img=''} = resp.usuario
        this.usuario = new Usuario(nombre, email,'', img, google, role, uid)
        
        localStorage.setItem('token', resp.token );
        return true;
      }),
    
      catchError( error => of(false) )
      /* tap( (resp: any) => {
        console.log(resp)
        const {email,google, nombre, role, uid, img=''} = resp.usuario
        this.usuario = new Usuario(nombre, email,'', img, google, role, uid)
        
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      catchError( error => of(false) ) */
    );

  }


}
