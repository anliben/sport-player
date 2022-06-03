import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemStore } from 'src/app/interfaces/item-store-interface';

@Component({
  selector: 'app-confirmar-compra-item-modal',
  templateUrl: './confirmar-compra-item-modal.component.html',
  styleUrls: ['./confirmar-compra-item-modal.component.scss'],
})
export class ConfirmarCompraItemModalComponent implements OnInit {
  @Input() itemStore: ItemStore;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
    // this.itemStore.typePayments
  }
}
