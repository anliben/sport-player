import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logged: boolean = false;
  email: string;
  password: string;

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageServiceService,

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

  refresh(){
    this.login(this.email, this.password).subscribe((data)=>{
      this.storageService.setPlayer(data)
    })}
}
