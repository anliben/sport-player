import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagensRecebidasService {
 
  api = environment.api

  constructor(private httpClient: HttpClient) { }

  getRecivedMessages(){
    return this.httpClient.get<any[]>(this.api + `/recivedMessages/getAll`);
  }

}
