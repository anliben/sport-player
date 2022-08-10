import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AdicionarFichasModalComponent } from 'src/app/shared/components/modais/adicionar-fichas-modal/adicionar-fichas-modal.component';
import { AmigosModalComponent } from 'src/app/shared/components/modais/amigos-modal/amigos-modal.component';
// eslint-disable-next-line max-len
import { ConfirmarCompraItemModalComponent } from 'src/app/shared/components/modais/confirmar-compra-item-modal/confirmar-compra-item-modal.component';
import { SaqueModalComponent } from 'src/app/shared/components/modais/saque-modal/saque-modal.component';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { ClubeService } from '../clube.service';
import { MaosPremiadasComponent } from 'src/app/shared/components/maos-premiadas/maos-premiadas.component';

@Component({
  selector: 'app-perfil-clube',
  templateUrl: './perfil-clube.page.html',
  styleUrls: ['./perfil-clube.page.scss'],
})
export class PerfilClubePage implements OnInit {
  moeda = 10;
  isOpenMaosPremiadas = false;

  storeItens: any[] = [];
  confirmBuyItemModal: HTMLIonModalElement;
  id: number;
  nickname: string;
  photo: string;
  level: number;

  constructor(
    private modalController: ModalController,
    private storageService: StorageServiceService,
    private clubeService: ClubeService,
    private popoverController: PopoverController
  ) {
    this.storageService.getPlayer().then((player: any) => {
      this.id = player.id;
      this.nickname = player.name;
      this.photo = player.photo ?? '../../../assets/img/avatar.png';
      this.level = player.level;
      this.clubeService.getStore().subscribe((store: any) => {
        this.storeItens = store;
      });
    });
  }

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

  async showFriensModal() {
    const modal = await this.modalController.create({
      component: AmigosModalComponent,
      cssClass: 'custom-class-modal-pattern modal-height-amigos',
      animated: false,
    });
    return await modal.present();
  }

  async showMaosPremiadas(ev: any) {
    const popover = await this.popoverController.create({
      component: MaosPremiadasComponent,
      cssClass: 'popover-maos-premiadas',
      event: ev,
      translucent: true,
      animated: false,
      mode: 'ios',
    });
    this.isOpenMaosPremiadas = true;
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.isOpenMaosPremiadas = false;
  }
}
