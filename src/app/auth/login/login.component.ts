import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup;

  constructor(private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    let {user, password} = this.formLogin.getRawValue();
    if (this.formLogin.invalid){
      alert('Login Incorreto')
    }else{
      console.log(user);
      console.log(password);
      this.router.navigate(['home']);
    }
  }
  register(){
    this.router.navigate(['register']);
  }
}
