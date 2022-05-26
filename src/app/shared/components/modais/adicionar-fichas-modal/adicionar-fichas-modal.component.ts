import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-fichas-modal',
  templateUrl: './adicionar-fichas-modal.component.html',
  styleUrls: ['./adicionar-fichas-modal.component.scss'],
})
export class AdicionarFichasModalComponent implements OnInit {

  valueReal: any = 100;
  
  constructor(private modalcontroller: ModalController ) { }

  ngOnInit() {}

  back(){
    this.modalcontroller.dismiss();
  }
}
