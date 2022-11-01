import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medico } from '../model/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
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

  cargarMedicos(desde :number = 0){
    const url= `${this.base_url}/medicos`;
    return this.http.get<{ ok: boolean, medicos: Medico[] }>(url, this.headers)
                .pipe(
                  map((resp :{ ok: boolean, medicos: Medico[] }) => resp.medicos)
                )

  }

  crearMedico(medico : {nombre :string, hospital : string}){
    const url= `${this.base_url}/medicos`;
    return this.http.post(url, medico,this.headers)


  }


  actualizarHospital(medico :Medico){
    const url= `${this.base_url}/medicos/${medico._id}`;
    return this.http.put(url, {medico},this.headers)
  }


  borrarMedico(_id :string){
    const url= `${this.base_url}/medicos/${_id}`;
    return this.http.delete(url,this.headers)


  }

}
