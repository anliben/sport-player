import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AssociarClubeModalComponent } from 'src/app/shared/components/modais/associar-clube-modal/associar-clube-modal.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  constructor(
    private router: Router,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  changeScreen(screen: any) {
    this.router.navigate([screen]);
  }

  async showAssociarClubeModal() {
    const modal = await this.modalController.create({
      component: AssociarClubeModalComponent,
      cssClass: 'custom-modal-associar-clube',
      animated: false,
    });

    return await modal.present();
  }
}
