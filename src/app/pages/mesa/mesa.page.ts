import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ConfiguracaoJogoModalComponent } from 'src/app/shared/components/configuracao-jogo-modal/configuracao-jogo-modal.component';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.page.html',
  styleUrls: ['./mesa.page.scss'],
})
export class MesaPage implements OnInit {
  tableType: string = 'cashgame';

  isModalOpen: boolean = false;

  joinedRoomTop: boolean = false;
  joinedRoomBottom: boolean = false;
  joinedRoomLeft: boolean = false;
  joinedRoomRight: boolean = false;
  j1: boolean = false;
  j2: boolean = false;
  j3: boolean = false;
  j4: boolean = false;

  namej1: string = 'roberto';
  namej2: string = 'william';
  namej3: string = 'joao';
  namej4: string = 'tiago';

  avatar1: string = '';
  avatar2: string = '';
  avatar3: string = '';
  avatar4: string = '';

  maxPlayer: number = 0;

  nome = '';
  position = '';

  players = [];
  countPlayer = 0;

  leftAnimation: boolean = false;
  topAnimation: boolean = false;
  rightAnimation: boolean = false;
  bottomAnimation: boolean = false;

  constructor(
    private WebSocket: WebSocketService,
    private modalController: ModalController
  ) {}


  ngOnInit() {
    this.generatePlayers();
    const numero = Math.floor(Math.random() * this.players.length);
    let player = this.players[numero];
    this.nome = this.players[numero].username;
    this.position = this.players[numero].posicao;


    this.WebSocket.emit('insertPlayer', {
      username: this.nome,
      posicao: 'right',
      room: '1',
      src: '/assets/game/game/homem.png',
    });

    //this.WebSocket.emit('updateUsers', { 'room': '1' })

    // escutar players na sala
    this.WebSocket.listen('findPlayers').subscribe((data: any) => {

      let arrs = ['left', 'right'];
      for (let index = 0; index < data.length; index++) {
        const player = data[index];
        if (player.friend === this.nome) {
          player.posicao = 'top';
          this.j3 = true;
          this.avatar3 = player.src;
          this.namej3 = player.username;
        } else if (player.username === this.nome) {
          player.posicao = 'bottom';
          this.j1 = true;
          this.avatar1 = player.src;
          this.namej1 = player.username;
        } else {
          if (arrs[0] === 'left') {
            player.posicao = arrs[0];
            this.j2 = true;
            this.avatar2 = player.src;
            this.namej2 = player.username;
            arrs.shift();
          }
          player.posicao = arrs[0];
          this.j4 = true;
          this.avatar4 = player.src;
          this.namej4 = player.username;
        }

      }
    });
  }

  async presentConfigGameModal() {
    const modal = await this.modalController.create({
      component: ConfiguracaoJogoModalComponent,
      showBackdrop: true,
      cssClass: 'my-custom-class',
      backdropDismiss: true,
      animated: false,
    });
    return await modal.present();
  }

  enterRoom() {
    this.WebSocket.emit('findPlayer', { room: '1' });
  }


  // generate 100 players random
  generatePlayers() {
    let posicoes = ['top', 'bottom', 'left', 'right'];
    for (let i = 0; i < 100; i++) {
      let indexPosicoes = Math.floor(Math.random() * posicoes.length);
      this.players.push({
        username: 'joao ' + i,
        src: '/assets/game/game/homem.png',
        posicao: posicoes[indexPosicoes],
        room: '1',
        friend: '',
        rival1: '',
        rival2: '',
        mao: ''
      });
    }
  }
}
