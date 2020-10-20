import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.isConnected = false;
  }

  public logout(): void {
    this.sharedService.isConnected = false;
  }
}
