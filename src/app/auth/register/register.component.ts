import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  ocultaPassword: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {

  }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  viewPassword(){
    this.ocultaPassword = !this.ocultaPassword;
  }

  async signUp(){

    const {name, email, password} = this.formRegister.getRawValue();
    console.log(name);
    console.log(email);
    console.log(password);

  }
}
