import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-associar-clube-modal',
  templateUrl: './associar-clube-modal.component.html',
  styleUrls: ['./associar-clube-modal.component.scss'],
})
export class AssociarClubeModalComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
  changeScreen(screen: any) {
    this.closeModal();
    this.router.navigate([screen]);
  }
}
