import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.api
  }

  getStore(){
    return this.httpClient.get(this.url + '/store/getAll')
  }
  
}
