import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

declare function replier(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public error: String = null;

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public login(): void{
    replier();
    this.sharedService.isConnected = true;
    this.router.navigate(['home']);
  }
}
