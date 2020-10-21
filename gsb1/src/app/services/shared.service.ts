import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  public isConnected: boolean;
  public user: User;

  constructor() { }
}
