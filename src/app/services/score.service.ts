import { Injectable } from '@angular/core';
import { PlayerIdService } from './player-id.service';
import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  score = 1;

  constructor(
    private webSocketService: WebSocketService,
    private playerIdService: PlayerIdService
  ) { }

  addScore(score: number) {
    this.score += score;
  }
  getScore(){
    return this.score;
  }
  truco(){
    console.log('truco');
    this.score = 3;
    this.webSocketService.emit('cartaPlayerCashGameX1', {
      jogador: this.playerIdService.getNome(),
      room: '1',
      manilha: this.playerIdService.getManilha(),
      request: 'truco'
    });
  }
  increaseScore(){
    console.log('increase');
    this.score += 3;
    this.webSocketService.emit('cartaPlayerCashGameX1', {
      jogador: this.playerIdService.getNome(),
      room: '1',
      manilha: this.playerIdService.getManilha(),
      request: 'increase'
    });
  }
  escape(){
    console.log('escape');
    this.score -= 1;
    this.webSocketService.emit('cartaPlayerCashGameX1', {
      jogador: this.playerIdService.getNome(),
      room: '1',
      manilha: this.playerIdService.getManilha(),
      request: 'escape'
    });
  }
  accept(){
    console.log('accept');
    this.score += 3;
    this.webSocketService.emit('cartaPlayerCashGameX1', {
      jogador: this.playerIdService.getNome(),
      room: '1',
      manilha: this.playerIdService.getManilha(),
      request: 'accept'
    });
  }
  resetScore(){
    console.log('reset');
    this.score = 1;
  }
}
