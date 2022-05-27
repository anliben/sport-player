import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient
  ) { }

  register(name: string, email: string, password: string) {
    const url = environment.api + '/auth/signup';
    return this.httpClient.post(url, {
      name,
      email,
      password
    })
  }
}
