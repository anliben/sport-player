import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerIdService } from 'src/app/services/player-id.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class CashgameServicesService {

  tableData;
  players = [];
  nome: string;
  rodadas;
  pontosNos = 10;
  pontosEles;


  constructor(
    private webSocket: WebSocketService,
    private playerIdService: PlayerIdService,
    private activatedRoute: Router,
  ) {
    this.tableData = this.activatedRoute.getCurrentNavigation().extras.state.data;
    this.generatePlayers();
    this.nome = this.players[Math.floor(Math.random() * this.players.length)].username;
    this.playerIdService.setNome(this.nome);
  }

  // emit add player
  addPlayer() {
    const id = this.playerIdService.getId();

    this.webSocket.emit('addPlayerCashGameX1', {
      id,
      username: this.nome,
      posicao: 'right',
      room: '1',
      src: '/assets/game/game/homem.png',
      request: 'addPlayer'
    });
  }

  // listen rodada
  listenRodada(data: any) {
    console.log(data);

    data.jogadores.forEach((element: any) => {
      this.rodadas = element.rodadas;
      if (element.username === this.nome) {
        this.pontosNos = element.pontos;
      } else {
        this.pontosEles = element.pontos;
      }
    });

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
