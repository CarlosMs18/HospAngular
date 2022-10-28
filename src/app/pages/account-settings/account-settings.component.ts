import { Component, OnInit } from '@angular/core';
import { AccountSettingsService } from 'src/app/services/account-settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {



  constructor(private accountSettingService : AccountSettingsService) {




  }

  ngOnInit() {
    this.accountSettingService.currentColor()
  }

  cambiarColor(color : string){
    this.accountSettingService.cambiarColor(color)
  }




}
