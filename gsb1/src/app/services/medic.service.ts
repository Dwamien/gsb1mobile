import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Medic } from '../models/medic';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class MedicService {
  private URLAPI: string = this.sharedService.URLAPI;
  private api_token: string = this.sharedService.user.api_token;
  public headers = new HttpHeaders( { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.api_token } );

  constructor(
    private sharedService: SharedService,
    private httpClient: HttpClient
  ) { }

  getMedics(): Observable<any> {
    return this.httpClient.get(this.URLAPI + 'Medicament', { headers: this.headers });
  }

  getMedic(id: number): Observable<any> {
    return this.httpClient.get(this.URLAPI + 'Medicament/' + id, { headers: this.headers });
  }
}
