import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AmigosSolicilatoesComponent } from '../amigos-solicilatoes/amigos-solicilatoes.component';

@Component({
  selector: 'app-amigos-modal',
  templateUrl: './amigos-modal.component.html',
  styleUrls: ['./amigos-modal.component.scss'],
})
export class AmigosModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async showSolicitationFriensModal() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: AmigosSolicilatoesComponent,
      cssClass: 'custom-class-modal-pattern modal-height-amigos',
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
