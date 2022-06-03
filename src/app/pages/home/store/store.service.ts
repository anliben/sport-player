import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  api = environment.api
  constructor(private httpClient: HttpClient) { }

  getItensStore(){
    return this.httpClient.get<any[]>(this.api + `/store/getAll`);
  }
  
}
