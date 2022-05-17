import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  ocultaPassword: boolean;

  constructor(
    private fb: FormBuilder
  ) { 

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    })
  }

  viewPassword(){
    this.ocultaPassword = !this.ocultaPassword;
  }

  async signUp(){

    let {name, email} = this.registerForm.getRawValue();
    console.log("🚀 ~ file: register.component.ts ~ line 37 ~ RegisterComponent ~ signUp ~ name", name)
    console.log("🚀 ~ file: register.component.ts ~ line 35 ~ RegisterComponent ~ signUp ~ email", email)
    console.log(this.registerForm.value)
    // console.log("🚀 ~ file: register.component.ts ~ line 30 ~ RegisterComponent ~ registerForm", this.registerForm.value)    const name = this.registerForm.controls['name'].value

    // console.log("🚀 ~ file: register.component.ts ~ line 29 ~ RegisterComponent ~ onSubmit ~ name", name)
  }
}
