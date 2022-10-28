import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formSubmitted = false;
  public registerForm : FormGroup = this.fb.group({
      nombre : ['c', Validators.required],
      email : ['ñ@gmail.com',Validators.required],
      password : ['12',Validators.required],
      password2 : ['12',Validators.required],
      terminos : [false,Validators.requiredTrue]
  }, {
    validators : this.passwordIguales('password','password2')
  })
  constructor(
    private fb : FormBuilder,
    private usuarioService : UsuarioService,
    private router :Router
     ) { }

  ngOnInit(): void {
  }


  contrasenasNoValidas(){
      const pass1 = this.registerForm.get('password')?.value
      const pass2 = this.registerForm.get('password2')?.value

      if((pass1 !== pass2) && this.formSubmitted){
        return true
      }else{
        return false
      }
  }

  aceptaTerminos(){
    if(this.registerForm.get('terminos')?.invalid && this.formSubmitted){
      return true
    }else{
      return false
    }
  }

  campoNoValido(campo : string){
    if(this.registerForm.get(campo)?.invalid && this.formSubmitted){
          return true
    }else{
      return false
    }
  }

  crearUsuario(){
    this.formSubmitted = true;
    if(this.registerForm.invalid){
      return
    }

    this.usuarioService.crearUsuario(this.registerForm.value)
                .subscribe(resp => {
                    this.router.navigateByUrl('/')
                    console.log(resp)
                },(err) =>{
                  Swal.fire('Error',err.error.msg, 'error')
                })

  }

  passwordIguales(pass1 : string, pass2 : string){
    return (formGroup : FormGroup) =>{
      const pass1Control = formGroup.get(pass1)
      const pass2Control = formGroup.get(pass2)

      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null)
      }else{
        pass2Control?.setErrors({noEsIgual : true})
      }
    }
  }
}
