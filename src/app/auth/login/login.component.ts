import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  ocultaPassword: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    const {user, password} = this.formLogin.getRawValue();
    if (this.formLogin.invalid){
      this.presentAlert();

    }else {
      this.loginService.login(user, password).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['/']);
      } )
    }
  }

  register(){
    this.router.navigate(['register']);
  }

  viewPassword(){
    this.ocultaPassword = !this.ocultaPassword;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login Invalido',
      message: 'Usuario ou Senha incorreto',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
