import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-aumentador',
  templateUrl: './aumentador.component.html',
  styles: [
  ]
})
export class AumentadorComponent implements OnInit {

  @Input('btnClass') colorBtn : string = 'btn-primary';
  @Input('valorPadre') valorPadre !: number;
  @Output('valorSalida') valorSalida : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.colorBtn = `btn ${this.colorBtn}`
    console.log(this.colorBtn)
  }


  cambiarValor(valor : number){
      if(this.valorPadre >=100 && valor >= 0){
        this.valorSalida.emit(100)
        return
      }

      if(this.valorPadre <=0 && valor < 0){
        this.valorSalida.emit(0)
        return
      }


      this.valorPadre += valor;
      this.valorSalida.emit(this.valorPadre)


  }


  onChange(valor : number){
    if(valor >= 100){
        this.valorPadre = 100
    }else if(valor <= 0){
      this.valorPadre = 0
    }else{
      this.valorPadre = valor
    }

    this.valorSalida.emit(this.valorPadre)
  }

}
