import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AmigosModalComponent } from '../amigos-modal/amigos-modal.component';

@Component({
  selector: 'app-amigos-solicilatoes',
  templateUrl: './amigos-solicilatoes.component.html',
  styleUrls: ['./amigos-solicilatoes.component.scss'],
})
export class AmigosSolicilatoesComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async showFriensModal() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: AmigosModalComponent,
      cssClass: 'custom-class-modal-pattern modal-height-amigos',
      animated: false,
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
