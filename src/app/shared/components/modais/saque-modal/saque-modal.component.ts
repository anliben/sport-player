import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-saque-modal',
  templateUrl: './saque-modal.component.html',
  styleUrls: ['./saque-modal.component.scss'],
})
export class SaqueModalComponent implements OnInit {
  formAccountData: FormGroup;
  valueReal = 1;
  keyPix = '(11) 97583-4321';
  typeKey = 'Telefone';
  name = 'Ronaldo da silva';
  cpf = '493.324.423-43';
  editAccountData = false;

  constructor(private formBuilder: FormBuilder, private modalcontroller: ModalController ) { }

  ngOnInit() {
    this.formAccountData = this.formBuilder.group({
      phone: ['(11) 97583-4321', [Validators.required, Validators.minLength(9), Validators.maxLength(20)]],
      name: ['Ronaldo da silva', [Validators.required]],
      cpf: ['493.324.423-43', [Validators.required]],
      email: ['ronaldo@gmail.com', [Validators.required]]
    });
  }

  cancelEditAccount() {
    this.editAccountData = !this.editAccountData;
  }

  back(){
    this.modalcontroller.dismiss();
  }
}
