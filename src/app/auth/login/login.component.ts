import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

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
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    const {user, password} = this.formLogin.getRawValue();
    if (this.formLogin.invalid || password != 'admin' || user != 'admin'){
      this.presentAlert();
    }else if(user ==='admin' && password ==='admin'){
      console.log(user);
      console.log(password);
      this.router.navigate(['home']);
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
