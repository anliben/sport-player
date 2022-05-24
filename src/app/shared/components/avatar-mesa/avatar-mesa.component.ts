import { Component, Input, OnInit } from '@angular/core';
import { PlayerIdService } from 'src/app/services/player-id.service';
import { wService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-avatar-mesa',
  templateUrl: './avatar-mesa.component.html',
  styleUrls: ['./avatar-mesa.component.scss'],
})
export class AvatarMesaComponent implements OnInit {
  @Input() avatar: string;
  @Input() cartas: string;
  @Input() nome: string; // colocar o decolator @input
  @Input() cardDirection = 'left';
  @Input() eu = false; // prop eu para aprecer minhas cartas.
  @Input() cards: object[] = [];
  @Input() cardsRival: object[];
  @Input() joined: boolean;
  @Input() avatarClass: string;
  @Input() tampaPClass: string;

  players = [];
  position = '';
  username = '';
  count = 0;

  constructor(
    private webSocket: WebSocketService,
    private playerIdService: PlayerIdService
  ) {}

  applyCustomClass(e: any) {
    if (e) {
      return {
        [e.toString()]: e !== undefined,
      };
    }
  }

  ngOnInit() {}

  async onClickLog(i) {
    console.log(i);

    this.count += 1;
    await this.webSocket.emit('cartaPlayerCashGameX1', {
      jogador: this.playerIdService.getNome(),
      carta: i,
      room: '1',
      count: this.count,
      manilha: this.playerIdService.getManilha(),
      request: 'jogarCarta'
    });
  }
  joinedRoom() {
    this.joined = true;
  }

  generatePlayers() {
    const posicoes = ['top', 'bottom', 'left', 'right'];
    for (let i = 0; i < 100; i++) {
      const indexPosicoes = Math.floor(Math.random() * posicoes.length);
      this.players.push({
        username: 'joao ' + i,
        src: '/assets/game/game/homem.png',
        posicao: posicoes[indexPosicoes],
        room: '1',
        friend: '',
        rival1: '',
        rival2: '',
        mao: '',
        id: this.playerIdService.getId(),
      });
    }
  }
}
