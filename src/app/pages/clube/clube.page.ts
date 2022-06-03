import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
// eslint-disable-next-line max-len
import { MensagensRecebidasModalComponent } from 'src/app/shared/components/modais/mensagens-recebidas-modal/mensagens-recebidas-modal.component';
import { SuporteModalPage } from 'src/app/shared/components/modais/suporte-modal/suporte-modal.page';
import { EmBrevePage } from '../em-breve/em-breve.page';
import { TruccoPage } from '../trucco/trucco.page';
import { PerfilClubePage } from './perfil-clube/perfil-clube.page';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.page.html',
  styleUrls: ['./clube.page.scss'],
})
export class ClubePage implements OnInit {
  perfilJogador = PerfilClubePage;
  emBreve = EmBrevePage;
  trucoPage = TruccoPage;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {}

  back() {
    this.navCtrl.navigateBack('/');
  }

  ngOnInit() {}

  async showSuporteModal() {
    const modal = await this.modalController.create({
      component: SuporteModalPage,
      cssClass: 'custom-class-modal-pattern modal-h20-height',
    });

    return await modal.present();
  }
  async showMessageModal() {
    const modal = await this.modalController.create({
      component: MensagensRecebidasModalComponent,
      cssClass: 'custom-class-modal-missoes modal-height-menssagens',
    });

    return await modal.present();
  }
}
