import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URLAPI: string = 'http://127.0.0.1:8000/api/';
  public headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private httpClient: HttpClient,
    private sharedService: SharedService
  ) { }

  public getUser(user: User): Observable<any> {
    return this.httpClient.post(this.URLAPI + 'login', JSON.stringify(user), { headers: this.headers });
  }

  public logout(): Observable<any> {
    let api_token = this.sharedService.user.api_token;
    this.headers = this.headers.set('Authorization', 'Bearer ' + api_token);
    return this.httpClient.get(this.URLAPI + 'logout', { headers: this.headers });
  }
}
