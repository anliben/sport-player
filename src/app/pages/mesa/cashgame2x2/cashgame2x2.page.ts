import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PlayerIdService } from 'src/app/services/player-id.service';
import { PlayerService } from 'src/app/services/player.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ConfiguracaoJogoModalComponent } from 'src/app/shared/components/configuracao-jogo-modal/configuracao-jogo-modal.component';

@Component({
  selector: 'app-cashgame2x2',
  templateUrl: './cashgame2x2.page.html',
  styleUrls: ['./cashgame2x2.page.scss'],
})
export class Cashgame2x2Page implements OnInit {
  tableType: string = 'cashgame';
  tableData: object = null;

  isModalOpen: boolean = false;

  joinedRoomTop: boolean = false;
  joinedRoomBottom: boolean = false;
  joinedRoomLeft: boolean = false;
  joinedRoomRight: boolean = false;
  j1: boolean = false;
  j2: boolean = false;
  j3: boolean = false;
  j4: boolean = false;
  cardsRivalTop: Array<any>;
  cardsRivalLeft: Array<any>;
  cardsRivalRight: Array<any>;

  namej1: string = '';
  namej2: string = '';
  namej3: string = '';
  namej4: string = '';

  avatar1: string = '';
  avatar2: string = '';
  avatar3: string = '';
  avatar4: string = '';

  maxPlayer: number = 0;

  nome = '';
  position = '';

  players = [];
  countPlayer = 0;
  joined: boolean = false;

  leftAnimation: boolean = false;
  topAnimation: boolean = false;
  rightAnimation: boolean = false;
  bottomAnimation: boolean = true;

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
  cardVira = {};
  count: number = 0
  pontosNos: number = 0;
  pontosEles: number = 0;
  rodadas: number = 0;
  friend: string = '';


  constructor(
    private WebSocket: WebSocketService,
    private modalController: ModalController,
    private playerIdService: PlayerIdService,
    private activatedRoute: Router,
  ) {
    this.tableData =
      this.activatedRoute.getCurrentNavigation().extras.state.data;
  }

  ngOnInit() {
    this.generatePlayers();
    this.nome = this.players[Math.floor(Math.random() * this.players.length)].username;
    this.playerIdService.setNome(this.nome);

    this.WebSocket.listen('novaMao').subscribe((data: any) => {
      data.jogadores.forEach((player) => {
        if (player.username === player.nome) {
          this.exampleCards = player.mao;
        }
      });
    })
    
   this.WebSocket.listen('rodada').subscribe((data: any) => {
      data.jogadores.forEach( (element: any)=> {
        this.rodadas = element.rodadas;
        if(element.username == this.nome){
          this.pontosNos = element.pontos;
          //this.exampleCards = element.mao;
        }else if(element.friend == this.nome){
          //this.cardsRivalTop = element.mao;
        }
        else{
          this.pontosEles = element.pontos;
          return
        }
      });
   })

   this.WebSocket.listen('jogarCarta').subscribe((data: any) => {
     let carta = {
        naipe: data.naipe,
        numero: data.numero,
        index: data.index
     }
     let arrs = ['left', 'right'];

     console.log(data);
     

     if(data.jogador == this.nome){
       this.exampleCards.splice(carta.index, 1);
       this.bottomCardNaipe = carta.naipe;
      this.bottomCardNumber = carta.numero;
       console.log(this.exampleCards);
      } else if (data.jogador == this.friend) {
       this.cardsRivalTop.splice(this.cardsRivalTop.indexOf(carta), 1);
       this.topCardNaipe = carta.naipe;
       this.topCardNumber = carta.numero;
     }
      if (data.jogador == this.namej2) {
        this.cardsRivalLeft.splice(this.cardsRivalLeft.indexOf(carta), 1);
        this.leftCardNaipe = carta.naipe;
        this.leftCardNumber = carta.numero;
        return}
        this.cardsRivalRight.splice(this.cardsRivalRight.indexOf(carta), 1);
        this.rightCardNaipe = carta.naipe;
        this.rightCardNumber = carta.numero;
   })

    let id = this.playerIdService.getId();

    this.WebSocket.emit('insertPlayer', {
      id: id,
      username: this.nome,
      posicao: 'right',
      room: '1',
      src: '/assets/game/game/homem.png',
    });
    //this.WebSocket.emit('updateUsers', { 'room': '1' })

    // escutar players na sala
   
    this.WebSocket.listen('findPlayers').subscribe((data: any) => {
      this.cardVira = data.vira[0];
      this.playerIdService.setManilha(data.manilha);
      this.playerIdService.setVira(this.cardVira);
      let arrs = ['left', 'right'];
      data.jogadores.forEach((player: any)=> {
        if(player.friend === this.nome){
          player.posicao = 'top'
          this.friend = player.username;
          this.j3 = true;
          this.avatar3 = player.src;
          this.namej3 = player.username;
          this.cardsRivalTop = [1, 2, 3];
        }
        if(player.username == this.nome){
          player.posicao = 'bottom'
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
        mao: '',
        id: this.playerIdService.getId(),
      });
    }
  }
}