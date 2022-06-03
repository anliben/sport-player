import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdicionarFichasModalComponent } from 'src/app/shared/components/modais/adicionar-fichas-modal/adicionar-fichas-modal.component';
import { AmigosModalComponent } from 'src/app/shared/components/modais/amigos-modal/amigos-modal.component';
// eslint-disable-next-line max-len
import { ConfirmarCompraItemModalComponent } from 'src/app/shared/components/modais/confirmar-compra-item-modal/confirmar-compra-item-modal.component';
import { SaqueModalComponent } from 'src/app/shared/components/modais/saque-modal/saque-modal.component';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { ClubeService } from '../clube.service';

@Component({
  selector: 'app-perfil-clube',
  templateUrl: './perfil-clube.page.html',
  styleUrls: ['./perfil-clube.page.scss'],
})
export class PerfilClubePage implements OnInit {
  moeda = 10;

  storeItens: any[] = [];
  confirmBuyItemModal: HTMLIonModalElement;
  id: number;
  nickname: string;
  photo: string;
  level: number;

  constructor(
    private modalController: ModalController,
    private storageService: StorageServiceService,
    private clubeService: ClubeService
    ) {
    this.storageService.getPlayer().then((player: any) => {
      this.id = player.id;
      this.nickname = player.name;
      this.photo = player.photo ?? '../../../assets/img/avatar.png';
      this.level = player.level;
      this.clubeService.getStore().subscribe((store: any) => {
        this.storeItens = store;
      })
    })
  }

  ngOnInit() {

  }

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

  async showFriensModal() {
    const modal = await this.modalController.create({
      component: AmigosModalComponent,
      cssClass: 'custom-class-modal-pattern modal-height-amigos',
    });
    return await modal.present();
  }
}
