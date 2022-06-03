import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuporteModalPage } from '../modais/suporte-modal/suporte-modal.page';
import { MissoesModalComponent } from '../modais/missoes-modal/missoes-modal.component';
import { MensagensRecebidasModalComponent } from '../modais/mensagens-recebidas-modal/mensagens-recebidas-modal.component';
import { StorageServiceService } from 'src/app/services/storage-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {


  id: string;
  nickname: string;
  photo: string;
  level: number;

  constructor(
    private modalCtrl: ModalController,
    private storageService: StorageServiceService
    ) {
      this.storageService.getPlayer().then((player: any) => {
        this.id = player.id;
        this.nickname = player.name;
        this.photo = player.photo ?? '../../../assets/img/avatar.png';
        this.level = player.level;
      })
    }

  ngOnInit() {

  }

  async showSuporteModal() {
    const modal = await this.modalCtrl.create({
      component: SuporteModalPage,
      cssClass: 'custom-class-modal-pattern modal-h20-height',
    });

    return await modal.present();
  }

  async showMissaoModal(){
    const modal = await this.modalCtrl.create({
      component: MissoesModalComponent,
      cssClass: 'custom-class-modal-missoes modal-height-missoes',
    });

    return await modal.present();
  }
  async showMessageModal(){
    const modal = await this.modalCtrl.create({
      component: MensagensRecebidasModalComponent,
      cssClass: 'custom-class-modal-missoes modal-height-menssagens',
    });

    return await modal.present();
  }
}

