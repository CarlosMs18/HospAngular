import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {
  public base_url : string = environment.base_url
  private _ocultarModal : boolean = true;
  public tipo !: 'usuarios' | 'medicos' | 'hospitales'
  public id !: string
  public  img?: string

  public nuevaImagen :EventEmitter<string> = new EventEmitter<string>()

  get ocultarModal(){
    return this._ocultarModal;
  }

  abrirModal(

      tipo : 'usuarios' | 'medicos' | 'hospitales',
      id : string,
      img : string = 'no-image'
  ){
    this._ocultarModal = false;
    this.tipo = tipo
    this.id = id
    this.img = img
    console.log('a')
    if(img?.includes('https')){
      this.img = img
    }else{
      this.img = `${this.base_url}/uploads/${tipo}/${img}`
    }
  }

  cerrarModal(){
    this._ocultarModal = true;
  }
  constructor() { }
}
