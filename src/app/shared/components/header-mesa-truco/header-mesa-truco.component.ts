import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MesaInterface } from 'src/app/interfaces/mesa-interface';
import { ConfiguracaoJogoModalComponent } from '../modais/configuracao-jogo-modal/configuracao-jogo-modal.component';
import { CGDetalhesJogoModalComponent } from '../modais/detalhes-jogo-cashgame-modal/detalhes-jogo-cashgame-modal.component';

@Component({
  selector: 'app-header-mesa-truco',
  templateUrl: './header-mesa-truco.component.html',
  styleUrls: ['./header-mesa-truco.component.scss'],
})
export class HeaderMesaTrucoComponent implements OnInit {
  @Input() pontosNos: number;
  @Input() pontosEles: number;
  @Input() rodadas: number;
  @Input() spectorsCount: any;
  @Input() tableData: MesaInterface;

  /**Modais */
  configGameModal: HTMLIonModalElement;
  detailGame: HTMLIonModalElement;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async showConfigGameModal() {
    this.configGameModal = await this.modalController.create({
      component: ConfiguracaoJogoModalComponent,
      cssClass: 'custom-modal-configuracao-jogo',
      animated: false,
    });
    return await this.configGameModal.present();
  }

  async showDetailGame() {
    this.detailGame = await this.modalController.create({
      component: CGDetalhesJogoModalComponent,
      cssClass: 'custom-modal-detalhes-jogo',
      componentProps: {
        playersDistribution: this.tableData.playersDistribution,
        buyMatch: this.tableData.buy,
        awardTotal: this.tableData.awardTotal,
      },
    });
    return await this.detailGame.present();
  }
}
