import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MesaInterface } from 'src/app/interfaces/mesa-interface';
import { PlayerIdService } from 'src/app/services/player-id.service';
import { ScoreService } from 'src/app/services/score.service';
import {WebSocketService, wWebSocketService } from 'src/app/services/web-socket.service';
import { ConfiguracaoJogoModalComponent } from 'src/app/shared/components/configuracao-jogo-modal/configuracao-jogo-modal.component';
import { CashgameServicesService } from './cashgame-services.service';

@Component({
  selector: 'app-cashgame1x1',
  templateUrl: './cashgame1x1.page.html',
  styleUrls: ['./cashgame1x1.page.scss'],
})
export class Cashgame1x1Page implements OnInit {
  tableType = 'cashgame';
  tableData: MesaInterface = null;

  isModalOpen = false;

  joinedRoomTop = false;
  joinedRoomBottom = false;
  joinedRoomLeft = false;
  joinedRoomRight = false;
  j1 = false;
  j2 = false;
  j3 = false;
  j4 = false;
  cardsRivalTop: Array<any>;
  cardsRivalLeft: Array<any>;
  cardsRivalRight: Array<any>;

  namej1 = '';
  namej2 = '';
  namej3 = '';
  namej4 = '';

  avatar1 = '';
  avatar2 = '';
  avatar3 = '';
  avatar4 = '';

  maxPlayer = 0;

  nome = '';
  position = '';

  players = [];
  countPlayer = 0;
  joined = false;

  cards = [{ naipe: 'copas', numero: 7 }]; // teste

  leftAnimation = false;
  topAnimation = false;
  rightAnimation = false;
  bottomAnimation = true;

  trucco = false;

  bottomCardNumber = 0;
  bottomCardNaipe = 0;

  topCardNumber = 0;
  topCardNaipe = 0;
  leftCardNumber = 0;
  leftCardNaipe = 0;

  rightCardNumber = 0;
  rightCardNaipe = 0;

  // Minhas adições Tiago:
  // -> espectadores
  spectorsCount: string | number = '----';
  // -> cartas de exemplo
  exampleCards: object[];
  // -> carta vira (A que fica por baixo da carta de costa em baixo do jackpot!!)
  cardVira = {
    numero: 0,
    naipe: ''
  };
  count = 0;
  pontosNos = 0;
  pontosEles = 0;
  rodadas = 0;
  friend = '';

  constructor(
    private webSocket: WebSocketService,
    private modalController: ModalController,
    private playerIdService: PlayerIdService,
    private activatedRoute: Router,
    private cashGameService: CashgameServicesService,
    private scoreService: ScoreService
  ) {
    this.tableData = this.cashGameService.tableData;
    this.nome = this.cashGameService.nome;
  }

  ngOnInit() {
    this.cashGameService.addPlayer();
    this.webSocket.listen('rodada').subscribe((data: any) => {
      console.log(data);

      data.jogadores.forEach((element: any) => {
        this.rodadas = element.rodadas;
        if (element.username === this.nome) {
          this.pontosNos = element.pontos;
        } else {
          this.pontosEles = element.pontos;
        }
      });
    });

    this.webSocket.listen('truco').subscribe((data: any) => {
      if (data.jogador !== this.nome) {
        this.trucco = true;
      }
    });

    this.webSocket.listen('increase').subscribe((data: any) => {
      if (data.jogador !== this.nome) {
        this.trucco = true;
      }
    });

    this.webSocket.listen('novaMao').subscribe((data: any) => {
      console.log(data);

      data.jogadores.forEach((player) => {
        if (player.username === this.nome) {
          this.exampleCards = player.mao;
        } else {
          this.cardsRivalTop = [1, 2, 3];
        }
      });
    });
    this.webSocket.listen('jogarCarta').subscribe((data: any) => {
      const carta = {
        naipe: data.naipe,
        numero: data.numero,
        index: data.index
      };

      if (data.jogador === this.nome) {
        this.exampleCards.splice(carta.index, 1);
        this.bottomCardNaipe = carta.naipe;
        this.bottomCardNumber = carta.numero;
      } else {
        this.cardsRivalTop.splice(this.cardsRivalTop.indexOf(carta), 1);
        this.topCardNaipe = carta.naipe;
        this.topCardNumber = carta.numero;
      }
    });

    this.webSocket.listen('findPlayersx1').subscribe((data: any) => {
      this.cardVira = data.vira[0];
      this.playerIdService.setManilha(data.manilha);
      this.playerIdService.setVira(this.cardVira);

      data.jogadores.forEach((player: any) => {
        console.log(player.username, this.nome);
        if (player.username === this.nome) {
          player.posicao = 'bottom';
          this.j1 = true;
          this.avatar1 = player.src;
          this.namej1 = player.username;
          this.exampleCards = player.mao;
          console.log(player.mao);
        } else {
          this.j3 = true;
          player.posicao = 'top';
          this.avatar3 = player.src;
          this.namej3 = player.username;
          this.cardsRivalTop = [1, 2, 3];
        }
      });
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

  async truco() {
    this.scoreService.truco();
  }
  async escape() {
    this.scoreService.escape();
    this.trucco = false;
  }
  async accept() {
    this.scoreService.accept();
    this.trucco = false;
  }
  async increaseScore() {
    this.scoreService.increaseScore();
    this.trucco = false;
  }
}
