import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
  public error: string;

  constructor(
    public sharedService: SharedService,
    private loginService: LoginService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.sharedService.isConnected = false;
  }

  public logout(): void {
    this.loginService.logout().subscribe(
      () => {
        this.sharedService.isConnected = false;
        this.router.navigate(['/home']);
      },
      (error) => { this.error = error.error.message}
    );
  }
}
