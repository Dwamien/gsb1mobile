import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public isConnected: boolean;
  public user: User;
  public URLAPI: string = "http://127.0.0.1:8000/api/";
  private originalUrl : string;

  constructor() { }

  public setOriginalUrl(url:string): void {
    this.originalUrl = url;
  }

  public getOriginalUrl() {
    let url: string = this.originalUrl;
    if (url === '') {
      url = 'home';
    }
    this.originalUrl = '';
    return url;
  }
}
