import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  formAlterEmail: FormGroup;
  formAlterPhone: FormGroup;
  formAlterPassword: FormGroup;
  brightness = 100;
  type = '';
  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.formAlterPhone = this.fb.group({
      phoneAtual: [''],
      newPhone: ['']
    });
    this.formAlterEmail = this.fb.group({
      emailAtual: [''],
      newEmail: ['']
    });
    this.formAlterPassword = this.fb.group({
      passwordAtual: [''],
      newPassword: [''],
      confirmedPassword: ['']
    });
  }

  selectTypeConfig(type){
    if(this.type !== type){
      this.type = type;
    }else{
      this.type = '';
    }
  }

  savePhone(){
    const { phoneAtual, newPhone } = this.formAlterPhone.getRawValue();
    console.log(phoneAtual);
    console.log(newPhone);
  }

  saveEmail(){
    const { emailAtual, newEmail} = this.formAlterEmail.getRawValue();
    console.log(emailAtual);
    console.log(newEmail);
  }

  savePassword(){
    const { passwordAtual, newPassword, confirmedPassword} = this.formAlterPassword.getRawValue();
    console.log(passwordAtual);
    console.log(newPassword);
    console.log(confirmedPassword);
  }

}
