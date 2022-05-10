import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

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

  constructor(private WebSocket: WebSocketService) {}

  ngOnInit() {
    this.generatePlayers();
    const numero = Math.floor(Math.random() * this.players.length);
    let player = this.players[numero];
    this.nome = this.players[numero].username;
    this.position = this.players[numero].posicao;

    // this.nome = window.prompt('Digite seu nome');

    this.WebSocket.emit('insertPlayer', {
        username: this.nome,
        posicao: "right",
        room: "1",
        src: "/assets/game/game/homem.png",
    });

    //this.WebSocket.emit('updateUsers', { 'room': '1' })

    // escutar players na sala
    this.WebSocket.listen('findPlayers').subscribe((data: any) => {
      let arrs = ['left', 'right']
      for (let index = 0; index < data.length; index++) {
        const player = data[index];
        if(player.friend === this.nome){
          player.posicao = 'top';
          this.j3 = true;
          this.avatar3 = player.src;
          this.namej3 = player.username;
        }else if(player.username === this.nome){
          player.posicao = 'bottom';
          this.j1 = true;
          this.avatar1 = player.src;
          this.namej1 = player.username;
        }
        else {
          if(arrs[0] === 'left'){
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
        
        console.log(data);
      }
    });
  }

  menu() {
    this.isModalOpen = !this.isModalOpen;
  }

  enterRoom() {
    this.WebSocket.emit('findPlayer', { room: '1' });
  }

  changeUserTop() {
    if (!this.joinedRoomTop) {
      this.joinedRoomTop = true;
      this.WebSocket.emit('join', {
        username: this.namej1,
        room: '1',
        posicao: 'top',
        src: '/assets/game/game/homem.png',
      });
    } else {
      this.joinedRoomTop = false;
      this.WebSocket.emit('leave', {
        username: this.namej1,
        room: '1',
        posicao: 'top',
        src: '/assets/game/game/homem.png',
      });
    }
  }

  changeUserBottom() {
    if (!this.joinedRoomBottom) {
      this.joinedRoomBottom = true;
      this.WebSocket.emit('join', {
        username: this.namej2,
        room: '1',
        posicao: 'bottom',
        src: '/assets/game/game/homem.png',
      });
    } else {
      this.joinedRoomBottom = false;
      this.WebSocket.emit('leave', {
        username: this.namej2,
        room: '1',
        posicao: 'bottom',
        src: '/assets/game/game/homem.png',
      });
    }
  }
  changeUserLeft() {
    if (!this.joinedRoomLeft) {
      this.WebSocket.emit('join', {
        username: this.namej3,
        room: '1',
        posicao: 'left',
        src: '/assets/game/game/homem.png',
      });
      this.joinedRoomLeft = true;
    } else {
      this.joinedRoomLeft = false;
      this.WebSocket.emit('leave', { username: this.namej3 });
    }
  }
  changeUserRight() {
    if (!this.joinedRoomRight) {
      this.joinedRoomRight = true;
      this.WebSocket.emit('join', {
        username: this.namej4,
        room: '1',
        posicao: 'right',
        src: '/assets/game/game/homem.png',
      });
    } else {
      this.joinedRoomRight = false;
      this.WebSocket.emit('leave', { username: this.namej4 });
    }
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
      });
    }
  }
}
