import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-historico-maos-modal',
  templateUrl: './historico-maos-modal.component.html',
  styleUrls: ['./historico-maos-modal.component.scss'],
})
export class HistoricoMaosModalComponent implements OnInit {
  @Input() playersDistribution: string;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
