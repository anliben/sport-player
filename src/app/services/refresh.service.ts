import { Injectable } from '@angular/core';
import { LoginService } from '../auth/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor(
    private login: LoginService,
  ) { }

  async refresh(){
    await this.login.refresh()
  }
}
