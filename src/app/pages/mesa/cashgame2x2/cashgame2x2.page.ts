import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MesaInterface } from 'src/app/interfaces/mesa-interface';
import { PlayerIdService } from 'src/app/services/player-id.service';
import { PlayerService } from 'src/app/services/player.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ChatJogoModalComponent } from 'src/app/shared/components/modais/chat-jogo-modal/chat-jogo-modal.component';
import { ConfiguracaoJogoModalComponent } from 'src/app/shared/components/modais/configuracao-jogo-modal/configuracao-jogo-modal.component';
import { ConvidarAmigosModalPage } from 'src/app/shared/components/modais/convidar-amigos-modal/convidar-amigos-modal.page';
// eslint-disable-next-line max-len
import { CGDetalhesJogoModalComponent } from 'src/app/shared/components/modais/detalhes-jogo-cashgame-modal/detalhes-jogo-cashgame-modal.component';
import { HistoricoMaosModalComponent } from 'src/app/shared/components/modais/historico-maos-modal/historico-maos-modal.component';
import { SinalSecretoModalPage } from 'src/app/shared/components/modais/sinal-secreto-modal/sinal-secreto-modal.page';

@Component({
  selector: 'app-cashgame2x2',
  templateUrl: './cashgame2x2.page.html',
  styleUrls: ['./cashgame2x2.page.scss'],
})
export class Cashgame2x2Page implements OnInit, OnDestroy {
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

  leftAnimation = false;
  topAnimation = false;
  rightAnimation = false;
  bottomAnimation = true;

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

  showModalTruco = false;
  timer = 5;
  partner = 'denied';

  /**Modal */
  secretSignModal: HTMLIonModalElement;
  inviteFriendsModal: HTMLIonModalElement;
  configGameModal: HTMLIonModalElement;
  handHistory: HTMLIonModalElement;
  detailGame: HTMLIonModalElement;
  chatGameModal: HTMLIonModalElement;

  constructor(
    private webSocket: WebSocketService,
    private modalController: ModalController,
    private playerIdService: PlayerIdService,
    private activatedRoute: Router
  ) {
    this.tableData =
      this.activatedRoute.getCurrentNavigation().extras.state.data;
  }

  ngOnInit() {
    this.generatePlayers();
    this.nome =
      this.players[Math.floor(Math.random() * this.players.length)].username;
    this.playerIdService.setNome(this.nome);

    this.webSocket.listen('novaMao').subscribe((data: any) => {
      data.jogadores.forEach((player) => {
        if (player.username === player.nome) {
          this.exampleCards = player.mao;
        }
      });
    });

    this.webSocket.listen('rodada').subscribe((data: any) => {
      data.jogadores.forEach((element: any) => {
        this.rodadas = element.rodadas;
        if (element.username === this.nome) {
          this.pontosNos = element.pontos;
          //this.exampleCards = element.mao;
        } else if (element.friend === this.nome) {
          //this.cardsRivalTop = element.mao;
        } else {
          this.pontosEles = element.pontos;
          return;
        }
      });
    });

    this.webSocket.listen('jogarCarta').subscribe((data: any) => {
      const carta = {
        naipe: data.naipe,
        numero: data.numero,
        index: data.index,
      };
      const arrs = ['left', 'right'];

      console.log(data);

      if (data.jogador === this.nome) {
        this.exampleCards.splice(carta.index, 1);
        this.bottomCardNaipe = carta.naipe;
        this.bottomCardNumber = carta.numero;
        console.log(this.exampleCards);
      } else if (data.jogador === this.friend) {
        this.cardsRivalTop.splice(this.cardsRivalTop.indexOf(carta), 1);
        this.topCardNaipe = carta.naipe;
        this.topCardNumber = carta.numero;
      }
      if (data.jogador === this.namej2) {
        this.cardsRivalLeft.splice(this.cardsRivalLeft.indexOf(carta), 1);
        this.leftCardNaipe = carta.naipe;
        this.leftCardNumber = carta.numero;
        return;
      }
      this.cardsRivalRight.splice(this.cardsRivalRight.indexOf(carta), 1);
      this.rightCardNaipe = carta.naipe;
      this.rightCardNumber = carta.numero;
    });

    const id = this.playerIdService.getId();

    this.webSocket.emit('insertPlayer', {
      id,
      username: this.nome,
      posicao: 'right',
      room: '1',
      src: '/assets/game/game/homem.png',
    });
    //this.webSocket.emit('updateUsers', { 'room': '1' })

    // escutar players na sala

    this.webSocket.listen('findPlayers').subscribe((data: any) => {
      this.cardVira = data.vira[0];
      this.playerIdService.setManilha(data.manilha);
      this.playerIdService.setVira(this.cardVira);
      const arrs = ['left', 'right'];
      data.jogadores.forEach((player: any) => {
        if (player.friend === this.nome) {
          player.posicao = 'top';
          this.friend = player.username;
          this.j3 = true;
          this.avatar3 = player.src;
          this.namej3 = player.username;
          this.cardsRivalTop = [1, 2, 3];
        }
        if (player.username === this.nome) {
          player.posicao = 'bottom';
          this.j1 = true;
          this.avatar1 = player.src;
          this.namej1 = player.username;
          this.exampleCards = player.mao;
          console.log(player.mao);
        } else {
          if (arrs[0] === 'left') {
            player.posicao = arrs[0];
            this.j2 = true;
            this.avatar2 = player.src;
            this.namej2 = player.username;
            arrs.shift();
            this.cardsRivalLeft = [1, 2, 3];
          }
          player.posicao = arrs[0];
          this.j4 = true;
          this.avatar4 = player.src;
          this.namej4 = player.username;
          this.cardsRivalRight = [1, 2, 3];
        }
      });
    });
  }

  ngOnDestroy() {
    // quando o componente for destruído ele fechará o modal.
    if (
      this.secretSignModal ||
      this.secretSignModal ||
      this.inviteFriendsModal
    ) {
      this.secretSignModal.dismiss();
      this.inviteFriendsModal.dismiss();
      this.configGameModal.dismiss();
    }
  }

  async showSecretSignModal() {
    this.secretSignModal = await this.modalController.create({
      component: SinalSecretoModalPage,
      cssClass: 'custom-modal-sinal-secreto',
      animated: false,
      showBackdrop: false,
    });
    return await this.secretSignModal.present();
  }

  async showInviteFriendsModal() {
    this.inviteFriendsModal = await this.modalController.create({
      component: ConvidarAmigosModalPage,
      cssClass: 'custom-class-modal-pattern modal-h20-height',
    });
    return await this.inviteFriendsModal.present();
  }

  async showHandHistory() {
    this.handHistory = await this.modalController.create({
      component: HistoricoMaosModalComponent,
      cssClass: 'custom-modal-historico-maos',
      componentProps: {
        playersDistribution: this.tableData.playersDistribution,
      },
    });
    return await this.handHistory.present();
  }

  async showChatGame() {
    this.chatGameModal = await this.modalController.create({
      component: ChatJogoModalComponent,
      cssClass: 'custom-modal-chat-jogo',
      showBackdrop: false,
      animated: false,
    });
    return await this.chatGameModal.present();
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
  click() {
    this.showModalTruco = !this.showModalTruco;
  }
}
