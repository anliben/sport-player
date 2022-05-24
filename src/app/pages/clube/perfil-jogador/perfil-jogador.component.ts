import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SaqueModalComponent } from '../../../shared/components/modais/saque-modal/saque-modal.component';

@Component({
  selector: 'app-perfil-jogador',
  templateUrl: './perfil-jogador.component.html',
  styleUrls: ['./perfil-jogador.component.scss'],
})
export class PerfilJogadorComponent implements OnInit {
  storeItens: any [] = [
    
    {
      "id": 1,
      "price": 100,
      "type": "vip",
      "quantity": 30,
      "typePayments": "reais",
      "item": "lorem",
      "imgItem": "/assets/game/vip/arte-vip.png"
    },
    {
      "id": 2,
      "price": 200,
      "type": "vip",
      "quantity": 60,
      "typePayments": "reais",
      "item": "lorem",
      "imgItem": "/assets/game/vip/arte-vip.png"
    },
    {
      "id": 3,
      "price": 300,
      "type": "vip",
      "quantity": 90,
      "typePayments": "reais",
      "item": "lorem",
      "imgItem": "/assets/game/vip/arte-vip.png"
    },
    {
      "id": 4,
      "price": 100,
      "type": "diamante",
      "quantity": 500,
      "typePayments": "diamante",
      "item": "lorem",
      "imgItem": "/assets/game/game/diamente.png"
    },
    {
      "id": 5,
      "price": 200,
      "type": "diamante",
      "quantity": 1000,
      "typePayments": "diamante",
      "item": "lorem",
      "imgItem": "/assets/game/game/diamente.png"
    },
    {
      "id": 6,
      "price": 300,
      "type": "diamante",
      "quantity": 2000,
      "typePayments": "diamante",
      "item": "lorem",
      "imgItem": "/assets/game/game/diamente.png"
    },
    {
      "id": 7,
      "price": 100,
      "typePayments": "diamante",
      "type": "emoji",
      "item": "lorem",
      "imgItem": "/assets/game/emojis/emoji-legal-eca.png"
    },
    {
      "id": 8,
      "price": 100,
      "typePayments": "diamante",
      "type": "emoji",
      "item": "lorem",
      "imgItem": "/assets/game/emojis/emoji-sei.png"
    },
    {
      "id": 9,
      "price": 100,
      "typePayments": "diamante",
      "type": "emoji",
      "item": "lorem",
      "imgItem": "/assets/game/emojis/emoji-sorriso-oculos-sol.png"
    }
  
];

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async showSaqueModal(){
    const modal = await this.modalController.create({
      component: SaqueModalComponent,
      cssClass: 'custom-class-modal-saque modal-height-saque',
    });
    
    return await modal.present();
  }

}
