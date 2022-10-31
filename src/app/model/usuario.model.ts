import { environment } from "src/environments/environment"

const base_url = environment.base_url;

export class Usuario{
    constructor(

        public nombre : string,
        public email : string,
        public password? : string,
        public img? : string,
        public google? : string,
        public role? : string,
        public uid?: string

    ){}

    get imageUrl(){

        if(!this.img){
          return `${base_url}/uploads/usuarios/no-image`
        }
        if(this.img){
            return `${base_url}/uploads/usuarios/${this.img}`
        }else{
            return `${base_url}/uploads/usuarios/no-image`
        }
        /* console.log(this.nombre) */
    }
}
