import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hospital } from '../model/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {
  private base_url = environment.base_url;



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

  cargarHospitales(desde :number = 0){
    const url= `${this.base_url}/hospitales`;
    return this.http.get<{ ok: boolean, hospitales: Hospital[] }>(url, this.headers)
                .pipe(
                  map((resp :{ ok: boolean, hospitales: Hospital[] }) => resp.hospitales)
                )

  }

  crearHospital(nombre : string){
    const url= `${this.base_url}/hospitales`;
    return this.http.post(url, {nombre},this.headers)


  }


  actualizarHospital(_id :string, nombre : string){
    const url= `${this.base_url}/hospitales/${_id}`;
    return this.http.put(url, {nombre},this.headers)
  }


  borrarHospital(_id :string){
    const url= `${this.base_url}/hospitales/${_id}`;
    return this.http.delete(url,this.headers)


  }






}
