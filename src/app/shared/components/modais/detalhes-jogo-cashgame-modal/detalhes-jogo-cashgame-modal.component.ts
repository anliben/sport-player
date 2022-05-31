import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-jogo-cashgame-modal',
  templateUrl: './detalhes-jogo-cashgame-modal.component.html',
  styleUrls: ['./detalhes-jogo-cashgame-modal.component.scss'],
})
export class CGDetalhesJogoModalComponent implements OnInit {
  @Input() playersDistribution: string;
  @Input() buyMatch: string;
  @Input() awardTotal: string;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  closeModal() {
    this.modalController.dismiss();
  }
}
