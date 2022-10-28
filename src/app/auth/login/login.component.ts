import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup = this.fb.group({
        email : [ localStorage.getItem('email') || '' ,[Validators.required]],
        password : ['',Validators.required],
        recordar : [false]

  })

  public loginSubmitted : boolean = false
  constructor(private fb : FormBuilder,
            private router :Router,
            private usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    this.loginSubmitted = true
    if(this.loginForm.invalid){
      return;
    }
    this.usuarioService.loginUsuario(this.loginForm.value)
                      .subscribe(resp => {

                            if(this.loginForm.get('recordar')?.value){
                              localStorage.setItem('email',this.loginForm.get('email')?.value)
                            }else{
                              localStorage.removeItem('email')
                            }

                            this.router.navigateByUrl('/')
                      },(error) =>{
                         Swal.fire('Error',error.error.msg, 'error')
                      })
  }

  campoNoValido(campo : string){
      if(this.loginForm.get(campo)?.invalid && this.loginSubmitted){
        console.log('fake!')
        return true
      }else{
        return false
      }
  }
}
