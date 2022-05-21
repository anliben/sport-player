import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuporteModalPage } from '../modais/suporte-modal/suporte-modal.page';
import { MissoesModalPage } from '../modais/missoes-modal/missoes-modal.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async showSuporteModal() {
    const modal = await this.modalCtrl.create({
      component: SuporteModalPage,
      cssClass: 'custom-class-modal-pattern modal-h20-height',
    });
    
    return await modal.present();
  }

  async showMissaoModal(){
    const modal = await this.modalCtrl.create({
      component: MissoesModalPage,
      cssClass: 'custom-class-modal modal-h40-height',
    });
    
    return await modal.present();
  }
}

