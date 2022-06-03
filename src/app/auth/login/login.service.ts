import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged: boolean = false;

  constructor(
    private httpClient: HttpClient,
  ) { }

  login(email: string, password: string) {
    const url = environment.api + '/auth/signin';
    return this.httpClient.get(url, {
      params: {
        email,
        password
      }
    })
  }
}
