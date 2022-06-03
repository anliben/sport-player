import { Component, Input, OnInit } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { MesaInterface } from 'src/app/interfaces/mesa-interface';
import { ChatJogoModalComponent } from '../modais/chat-jogo-modal/chat-jogo-modal.component';
import { HistoricoMaosModalComponent } from '../modais/historico-maos-modal/historico-maos-modal.component';

@Component({
  selector: 'app-footer-mesa-truco',
  templateUrl: './footer-mesa-truco.component.html',
  styleUrls: ['./footer-mesa-truco.component.scss'],
})
export class FooterMesaTrucoComponent implements OnInit {
  @Input() tableData: MesaInterface;
  handHistory: HTMLIonModalElement;
  chatGameModal: HTMLIonModalElement;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async showHandHistory() {
    this.handHistory = await this.modalController.create({
      component: HistoricoMaosModalComponent,
      cssClass: 'custom-modal-historico-maos',
      componentProps: {
        playersDistribution: this.tableData.playersDistribution,
      },
    });
    return await this.handHistory.present();
  }

  async showChatGame() {
    this.chatGameModal = await this.modalController.create({
      component: ChatJogoModalComponent,
      cssClass: 'custom-modal-chat-jogo',
      showBackdrop: false,
      animated: false,
    });
    return await this.chatGameModal.present();
  }
}
