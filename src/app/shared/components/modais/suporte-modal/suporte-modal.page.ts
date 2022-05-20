import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-suporte-modal',
  templateUrl: './suporte-modal.page.html',
  styleUrls: ['./suporte-modal.page.scss'],
})
export class SuporteModalPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
