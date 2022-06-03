import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chat-jogo-modal',
  templateUrl: './chat-jogo-modal.component.html',
  styleUrls: ['./chat-jogo-modal.component.scss'],
})
export class ChatJogoModalComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
