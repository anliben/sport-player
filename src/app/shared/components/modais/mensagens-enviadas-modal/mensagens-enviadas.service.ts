import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensagensEnviadasService {

  api = environment.api

  constructor(private httpClient: HttpClient) { }

  getsendedMessages(){
    return this.httpClient.get<any[]>(this.api + `/sendedMessages/getAll`);
  }

}
