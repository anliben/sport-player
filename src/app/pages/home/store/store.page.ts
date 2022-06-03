import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
// eslint-disable-next-line max-len
import { ConfirmarCompraItemModalComponent } from 'src/app/shared/components/modais/confirmar-compra-item-modal/confirmar-compra-item-modal.component';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  storeItens: any[] = [];

  confirmBuyItemModal: HTMLIonModalElement;

  constructor(private modalController: ModalController, private storeService: StoreService ) {}

  ngOnInit() {
    this.storeService.getItensStore().subscribe((res)=>{
      console.log(res);
      
      this.storeItens = res;
      
    })
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
