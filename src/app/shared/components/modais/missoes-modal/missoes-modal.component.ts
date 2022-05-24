import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-missoes-modal',
  templateUrl: './missoes-modal.component.html',
  styleUrls: ['./missoes-modal.component.scss'],
})
export class MissoesModalComponent implements OnInit {
  missoes: any[] = [
    {
      id: 1,
      name: 'Primeiro Login',
      premio: '2',
      status: 'complete'
    },
    {
      id: 2,
      name: 'Alterar Nick',
      premio: '2',
      status: 'resgatar'
    },
    {
      id: 2,
      name: 'Jogar uma vez',
      premio: '2',
      status: 'resgatar'
    },
    {
      id: 2,
      name: 'Verificar Conta',
      premio: '2',
      status: 'resgatar'
    },
    {
      id: 2,
      name: 'Verificar Conta',
      premio: '2',
      status: 'resgatar'
    },
    {
      id: 2,
      name: 'Associar-se a um clube',
      premio: '2',
      status: 'resgatar'
    }
  ];
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }
}