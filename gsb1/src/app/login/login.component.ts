import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SharedService } from '../services/shared.service';
import { User } from '../models/user';

declare function replier(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public error: String = null;
  public user: User;
  public title: string;

  constructor(
    private sharedService: SharedService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.title = "Connexion";
  }

  public login(): void{
    replier();
    this.loginService.getUser(this.user).subscribe(
      (user) => {
        this.user = user;
        this.sharedService.isConnected = true;
        this.sharedService.user = this.user;
        this.router.navigate(['home']);
      },
      (error) => {
        this.error = error.error.message;
      }
    );
  }
}
