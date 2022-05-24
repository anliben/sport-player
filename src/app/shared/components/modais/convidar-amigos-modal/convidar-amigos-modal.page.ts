import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-convidar-amigos-modal',
  templateUrl: './convidar-amigos-modal.page.html',
  styleUrls: ['./convidar-amigos-modal.page.scss'],
})
export class ConvidarAmigosModalPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
