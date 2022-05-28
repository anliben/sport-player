import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SaqueModalComponent } from '../../../shared/components/modais/saque-modal/saque-modal.component';
import { AdicionarFichasModalComponent } from '../../../shared/components/modais/adicionar-fichas-modal/adicionar-fichas-modal.component';
// eslint-disable-next-line max-len
import { ConfirmarCompraItemModalComponent } from 'src/app/shared/components/modais/confirmar-compra-item-modal/confirmar-compra-item-modal.component';

@Component({
  selector: 'app-perfil-jogador',
  templateUrl: './perfil-jogador.component.html',
  styleUrls: ['./perfil-jogador.component.scss'],
})
export class PerfilJogadorComponent implements OnInit {
  storeItens: any[] = [
    {
      id: 1,
      price: 100,
      type: 'vip',
      quantity: 30,
      typePayments: 'fichaSp',
      item: 'lorem',
      imgItem: '/assets/game/vip/arte-vip.png',
    },
    {
      id: 2,
      price: 200,
      type: 'vip',
      quantity: 60,
      typePayments: 'fichaSp',
      item: 'lorem',
      imgItem: '/assets/game/vip/arte-vip.png',
    },
    {
      id: 3,
      price: 300,
      type: 'vip',
      quantity: 90,
      typePayments: 'fichaSp',
      item: 'lorem',
      imgItem: '/assets/game/vip/arte-vip.png',
    },
    {
      id: 4,
      price: 100,
      type: 'diamante',
      quantity: 500,
      typePayments: 'fichaSp',
      item: 'lorem',
      imgItem: '/assets/game/game/diamente.png',
    },
    {
      id: 5,
      price: 200,
      type: 'diamante',
      quantity: 1000,
      typePayments: 'fichaSp',
      item: 'lorem',
      imgItem: '/assets/game/game/diamente.png',
    },
    {
      id: 6,
      price: 300,
      type: 'diamante',
      quantity: 2000,
      typePayments: 'fichaSp',
      item: 'lorem',
      imgItem: '/assets/game/game/diamente.png',
    },
    {
      id: 7,
      price: 100,
      typePayments: 'fichaSp',
      type: 'emoji',
      item: 'lorem',
      imgItem: '/assets/game/emojis/emoji-legal-eca.png',
    },
    {
      id: 8,
      price: 100,
      typePayments: 'fichaSp',
      type: 'emoji',
      item: 'lorem',
      imgItem: '/assets/game/emojis/emoji-sei.png',
    },
    {
      id: 9,
      price: 100,
      typePayments: 'fichaSp',
      type: 'emoji',
      item: 'lorem',
      imgItem: '/assets/game/emojis/emoji-sorriso-oculos-sol.png',
    },
  ];
  confirmBuyItemModal: HTMLIonModalElement;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async showSaqueModal() {
    const modal = await this.modalController.create({
      component: SaqueModalComponent,
      cssClass: 'custom-class-modal-saque modal-height-saque',
    });
    return await modal.present();
  }
  async showAdicionarFichasModal() {
    const modal = await this.modalController.create({
      component: AdicionarFichasModalComponent,
      cssClass: 'custom-class-modal-pattern modal-h20-height',
    });
    return await modal.present();
  }
  async showConfirmBuyItemModal(itemStore: any) {
    this.confirmBuyItemModal = await this.modalController.create({
      component: ConfirmarCompraItemModalComponent,
      cssClass: 'custom-modal-confirmar-compra-modal',
      showBackdrop: false,
      componentProps: {
        itemStore,
      },
    });

    return this.confirmBuyItemModal.present();
  }
}
