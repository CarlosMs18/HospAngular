import { Component, OnInit } from '@angular/core';
import { AccountSettingsService } from '../services/account-settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private accountSettingService : AccountSettingsService) {

   }

  ngOnInit(): void {
  }

}
