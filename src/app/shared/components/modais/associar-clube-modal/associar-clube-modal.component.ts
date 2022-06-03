import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-associar-clube-modal',
  templateUrl: './associar-clube-modal.component.html',
  styleUrls: ['./associar-clube-modal.component.scss'],
})
export class AssociarClubeModalComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
