import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
// eslint-disable-next-line max-len
import { ConfirmarCompraItemModalComponent } from 'src/app/shared/components/modais/confirmar-compra-item-modal/confirmar-compra-item-modal.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  storeItens: any[] = [
    {
      id: 1,
      price: 100,
      type: 'diamante',
      quantity: 500,
      typePayments: 'reais',
      item: 'lorem',
      imgItem: '/assets/game/game/diamente.png',
    },
    {
      id: 2,
      price: 200,
      type: 'diamante',
      quantity: 1000,
      typePayments: 'reais',
      item: 'lorem',
      imgItem: '/assets/game/game/diamente.png',
    },
    {
      id: 3,
      price: 300,
      type: 'diamante',
      quantity: 2000,
      typePayments: 'reais',
      item: 'lorem',
      imgItem: '/assets/game/game/diamente.png',
    },
    {
      id: 4,
      price: 100,
      type: 'moeda',
      quantity: 500,
      typePayments: 'diamante',
      item: 'lorem',
      imgItem: '/assets/game/game/moeda.png',
    },
    {
      id: 5,
      price: 200,
      type: 'moeda',
      quantity: 1000,
      typePayments: 'diamante',
      item: 'lorem',
      imgItem: '/assets/game/game/moeda.png',
    },
    {
      id: 6,
      price: 300,
      type: 'moeda',
      quantity: 2000,
      typePayments: 'diamante',
      item: 'lorem',
      imgItem: '/assets/game/game/moeda.png',
    },
    {
      id: 7,
      price: 100,
      typePayments: 'diamante',
      type: 'emoji',
      item: 'lorem',
      imgItem: '/assets/game/emojis/emoji-legal-eca.png',
    },
    {
      id: 8,
      price: 100,
      typePayments: 'diamante',
      type: 'emoji',
      item: 'lorem',
      imgItem: '/assets/game/emojis/emoji-sei.png',
    },
    {
      id: 9,
      price: 100,
      typePayments: 'diamante',
      type: 'emoji',
      item: 'lorem',
      imgItem: '/assets/game/emojis/emoji-sorriso-oculos-sol.png',
    },
  ];

  confirmBuyItemModal: HTMLIonModalElement;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}
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
