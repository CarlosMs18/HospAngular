import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/model/hospital.model';
import { Medico } from 'src/app/model/medico.model';
import { HospitalesService } from 'src/app/services/hospitales.service';
import { MedicoService } from 'src/app/services/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {

  public medicoForm! : FormGroup;
  public hospitales : Hospital[] = [];
  public hospitalSeleccionado : Hospital | undefined;

  public medicoSeleccionado  !:Medico;

  constructor(private fb : FormBuilder,
              private hospitalService : HospitalesService,
              private medicoService : MedicoService,
              private router : Router) { }

  ngOnInit(): void {

    this.medicoForm = this.fb.group({
      nombre : ['Hernando',Validators.required],
      hospital : ['',Validators.required]
    })

    this.cargarHospitales()

    this.medicoForm.get('hospital')?.valueChanges
            .subscribe(hospitalId => {

                this.hospitalSeleccionado = this.hospitales.find(h => h._id === hospitalId)
                console.log(this.hospitalSeleccionado)
            })
  }

  cargarHospitales(){
    this.hospitalService.cargarHospitales()
            .subscribe((hospitales : Hospital[])=>{

                this.hospitales = hospitales
            })
  }
  guardarMedico(){
    const {nombre} = this.medicoForm.value
    this.medicoService.crearMedico(this.medicoForm.value)
          .subscribe((resp  : any)=> {
            console.log(resp)
            Swal.fire('Creado',`${nombre} creado correctamente`, 'success')
            this.router.navigateByUrl(`/dashboard/medico/${resp.medico._id}`)
          })
  }


}
