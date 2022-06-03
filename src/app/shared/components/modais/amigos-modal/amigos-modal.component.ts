import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlayerService } from 'src/app/services/player.service';
import { RefreshService } from 'src/app/services/refresh.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';
import { AmigosSolicilatoesComponent } from '../amigos-solicilatoes/amigos-solicilatoes.component';
import { AmigosModalService } from './amigos-modal.service';

@Component({
  selector: 'app-amigos-modal',
  templateUrl: './amigos-modal.component.html',
  styleUrls: ['./amigos-modal.component.scss'],
})
export class AmigosModalComponent implements OnInit {

  nome_amigo: string;

  id: string;
  id_friend: string;
  id_friend_request: string;

  friends: Array<any> = [];
  hasFriends: boolean = false;

  constructor(
    private modalController: ModalController,
    private amigosServices: AmigosModalService,
    private storageService: StorageServiceService,
    private playerService: PlayerService,
    private refresh: RefreshService
    ) { }

  ngOnInit() {
    this.storageService.getPlayer().then((player: any) => {
      this.id = player.id;
      console.log(player);

      player.friend.friends.forEach(friend => {
        console.log(`id friend`, friend);

        this.amigosServices.getFriends(friend.id).subscribe((res: any) => {
            if (res) {
              console.log(res);

            this.friends.push({
              name: res.name,
              id: res.id
            });
          }
          })
      })
    })
  }

  async showSolicitationFriensModal() {
    this.dismiss();
    const modal = await this.modalController.create({
      component: AmigosSolicilatoesComponent,
      cssClass: 'custom-class-modal-pattern modal-height-amigos',
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  solicitarAmizade(){
    this.playerService.requestFriend(this.id, this.id_friend_request.toLowerCase()).subscribe((res: any) => {
      this.refresh.refresh();
    })
  }

  deletePlayer(id: string){
    this.playerService.deleteFriend(this.id, id).subscribe((res: any) => {
      this.dismiss();
    })
  }

  acceptFriend(id: string){
    this.playerService.acceptFriend(this.id, id).subscribe((res: any) => {
    
    })
  }

  ionViewWillEnter(){
    this.refresh.refresh()
  }

}
