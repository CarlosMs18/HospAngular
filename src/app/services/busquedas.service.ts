import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario.model';



@Injectable({
  providedIn: 'root'
})
export class BusquedasService {
  private base_url = environment.base_url
  constructor(private http : HttpClient) { }


  get token(): string{
    return localStorage.getItem('token') || '';
  }



  get headers(){
    return {
      headers : {
        'x-token' : this.token
      }
    }
  }

  private transformarUsuarios(resultados : any[]) : Usuario[]{
    return resultados.map(
      user => new Usuario(user.nombre, user.email, '', user.img, user.google,user.role, user.uid)
    );
  }

  buscar(tipo : 'usuarios' | 'medicos' | 'hospitales' , termino :string = ''){
    const url= `${this.base_url}/todo/coleccion/${tipo}/${termino}`;
    return this.http.get<any[]>(url, this.headers)
            .pipe(
              map((resp : any)  => /* resp.resultados */{
                switch(tipo){
                  case 'usuarios':
                    return this.transformarUsuarios(resp.resultados)
                  break;

                default:
                  return [];
                }
              })
            )
  }
}
