import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sinal-secreto-modal',
  templateUrl: './sinal-secreto-modal.page.html',
  styleUrls: ['./sinal-secreto-modal.page.scss'],
})
export class SinalSecretoModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
