import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public colorMain = document.querySelector('#theme')

  constructor() {
    const colorInicial =  localStorage.getItem('color-theme') || './assets/css/colors/default-dark.css'
    this.colorMain?.setAttribute('href',colorInicial)



  }

  ngOnInit() {
    this.currentColor()
  }


  cambiarColor(color : string){
    const colorDinamico = `./assets/css/colors/${color}.css`
    this.colorMain?.setAttribute('href',colorDinamico);

    localStorage.setItem('color-theme',colorDinamico)



    this.currentColor()
  }

  currentColor(){
      const selectorAll = document.querySelectorAll('.selector')

      selectorAll.forEach(selector => {
        selector.classList.remove('working');

        const themeSimple  = selector.getAttribute('data-theme')
        const getColorMain = this.colorMain?.getAttribute('href')
        const urlCurrent = `./assets/css/colors/${themeSimple}.css`


        if(urlCurrent === getColorMain){
          selector.classList.add('working')
          console.log(selector)
        }

      })


  }
}
