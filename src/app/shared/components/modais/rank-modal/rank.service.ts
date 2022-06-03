import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankService {
  api = environment.api
  constructor(private httpClient: HttpClient) { }

  getRankPlayers(){
    return this.httpClient.get<any[]>(this.api + `/rankPlayer/getAll`);
  }
  getSeason(){
    return this.httpClient.get<any[]>(this.api + `/season/getAll`);
  }
  

}
