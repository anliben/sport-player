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
  awardTotalConverted: number | string;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.awardTotalConverted = this.awardTotal ? +this.awardTotal / 2 : 'Un';
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
