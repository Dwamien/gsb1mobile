import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public isConnected: boolean;
  public user: User;
  //public URLAPI: string = "http://127.0.0.1:8000/api/";
  public URLAPI: string= "http://10.10.16.8/user1/apigsb1/public/api/";

  constructor() { }

}
