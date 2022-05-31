import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { SuporteModalPage } from 'src/app/shared/components/modais/suporte-modal/suporte-modal.page';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.page.html',
  styleUrls: ['./clube.page.scss'],
})
export class ClubePage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {}

  back() {
    this.navCtrl.back();
  }

  ngOnInit() {}

  async showSuporteModal() {
    const modal = await this.modalController.create({
      component: SuporteModalPage,
      cssClass: 'custom-class-modal-pattern modal-h20-height',
    });

    return await modal.present();
  }
}
