import { Injectable } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AmigosModalService {

  url: string;

  constructor(
    private PlayerService: PlayerService,
  ) {
    this.url = environment.api
  }


  getFriends(id){
    return this.PlayerService.getOnePlayer(id)
  }

}
