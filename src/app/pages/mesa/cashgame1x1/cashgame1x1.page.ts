import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MesaInterface } from 'src/app/interfaces/mesa-interface';
import { PlayerIdService } from 'src/app/services/player-id.service';
import { ScoreService } from 'src/app/services/score.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

import { ConfiguracaoJogoModalComponent } from 'src/app/shared/components/modais/configuracao-jogo-modal/configuracao-jogo-modal.component';
import { ConvidarAmigosModalPage } from 'src/app/shared/components/modais/convidar-amigos-modal/convidar-amigos-modal.page';
import { CashgameServicesService } from './cashgame-services.service';
import { interval, timer } from 'rxjs';

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
  truccoMe = false;

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
    naipe: '',
  };
  count = 0;
  pontosNos = 0;
  pontosEles = 0;
  rodadas = 0;
  friend = '';

  timer = 5;
  message: string;
  action: string;
  messageMe: string = 'Aguardando resposta';

  acceptTruco: boolean = false;
  unsubscribeForTime = false;

  timingObs = (t) => interval(t);

  /**Modal */
  configGameModal: HTMLIonModalElement;

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
        console.log(element);
        if (element.username === this.nome) {
          this.pontosNos = element.pontos;
        } else {
          this.pontosEles = element.pontos;
        }
      });
    });

    this.webSocket.listen('truco').subscribe((data: any) => {
      this.timer = 5
      this.acceptTruco = false
      this.timingTrucco(1000);
      this.messageMe = 'Aguardando resposta';
      this.action = 'TRUCO!!!'
      if (data.jogador !== this.nome) {
        this.trucco = true;
        this.message = `${data.jogador} pediu truco`;
      } else {
        this.truccoMe = true;
      }

    });

    this.webSocket.listen('increase').subscribe((data: any) => {
      this.action = 'AUMENTOU!!!'
      this.timingTrucco(1000)
      this.timer = 5
      this.acceptTruco = false
      if (data.jogador !== this.nome) {
        this.truccoMe = true;
        this.messageMe = `${data.jogador} aumentou`;
      }
      this.trucco = true;
      this.message = 'aguardando resposta';
    });

    this.webSocket.listen('escape').subscribe((data: any) => {
      this.action = 'ESCAPOU!!!'

      if (data.jogador !== this.nome) {
        this.trucco = true;
        this.messageMe = `${data.jogador} escapou`;
      }
      this.trucco = false;
      this.timingTrucoForMe()
    });

    this.webSocket.listen('accept').subscribe((data: any) => {
      this.action = 'ACEITOU!!!'

      this.messageMe = `${data.jogador} aceitou`;
      this.acceptTruco = true
      this.trucco = false;
      this.timingTrucoForMe()

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
        index: data.index,
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

  ngOnDestroy() {
    console.log('destroy');

    this.cashGameService.disconect();
  }
  ionViewDidLeave() {
    console.log('leave');
    this.cashGameService.disconect();
  }
  ionViewWillLeave() {
    console.log('leave');
    this.cashGameService.disconect();
  }


  async timingTrucco(t) {

    let times = await interval(t)

    let waiting = times.subscribe(async () => {
      this.timer--;
      if (this.acceptTruco === true) {
        waiting.unsubscribe()
      }
      if (this.timer === 0 && this.acceptTruco === false) {
        this.escape()
        waiting.unsubscribe()
      }
    })
  }

  timingTrucoForMe() {
    let times = interval(1000)
    let count = 0;

    let waiting = times.subscribe(() => {
      if (count === 1) {
        this.truccoMe = false;
        waiting.unsubscribe()
      }
      count++;
    })
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

  async showInviteFriendsModal() {
    const modal = await this.modalController.create({
      component: ConvidarAmigosModalPage,
      cssClass: 'custom-class-modal-pattern modal-h20-height',
    });
    return await modal.present();
  }

  async showConfigGameModal() {
    this.configGameModal = await this.modalController.create({
      component: ConfiguracaoJogoModalComponent,
      cssClass: 'custom-modal-configuracao-jogo',
      animated: false,
    });
    return await this.configGameModal.present();
  }

  async presentConfigGameModal() {
    const modal = await this.modalController.create({
      component: ConfiguracaoJogoModalComponent,
      showBackdrop: true,
      cssClass: 'custom-class-modal-pattern',
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
  }
  async accept() {
    this.scoreService.accept();
  }
  async increaseScore() {
    this.scoreService.increaseScore();
  }
}
