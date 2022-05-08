import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.page.html',
  styleUrls: ['./mesa.page.scss'],
})
export class MesaPage implements OnInit {

  isModalOpen: boolean = false;

  joinedRoomTop: boolean = false;
  joinedRoomBottom: boolean = false;
  joinedRoomLeft: boolean = false;
  joinedRoomRight: boolean = false;
  j1: boolean = false;
  j2: boolean = false;
  j3: boolean = false;
  j4: boolean = false;

  namej1: string = 'roberto'
  namej2: string = 'william'
  namej3: string = 'joao'
  namej4: string = 'tiago'


  avatar1: string = '';
  avatar2: string = '';
  avatar3: string = '';
  avatar4: string = '';

  maxPlayer: number = 0;

  nome = ''
  position = ''


  constructor(
    private WebSocket: WebSocketService
  ) { }


  ngOnInit() {

    //this.WebSocket.emit('updateUsers', { 'room': '1' })

    this.WebSocket.listen('join').subscribe((data:any)=> {
      console.log(data)
      if (data.username === this.nome) {
        this.avatar2 = data.src
        this.namej2 = data.username
        this.j2 = true;
      }else{
        if(data.posicao == 'top'){

          this.avatar1 = data.src
          this.namej1 = data.username
          this.j1 = true;
        }

        if(data.posicao == 'left'){
          this.avatar3 = data.src
          this.namej3 = data.username
          this.j3 = true;
        }
        
        if(data.posicao == 'right'){
          this.avatar4 = data.src
          this.namej4 = data.username
          this.j4 = true;
        }
        
      }
    })

    this.WebSocket.listen('joined-top').subscribe((data: any) => {
      console.log('join', data)
      this.avatar1 = data.src
      this.namej1 = data.username
      this.j1 = true;
      this.maxPlayer += 1
    })
    
    this.WebSocket.listen('joined-bottom').subscribe((data: any) => {
      console.log('join', data)
      this.avatar2 = data.src
      this.namej2 = data.username
      this.j2 = true;
    })
    
    this.WebSocket.listen('joined-left').subscribe((data: any) => {
      console.log('join', data)
      this.avatar3 = data.src
      this.namej3 = data.username
      this.j3 = true;
    })
    
    this.WebSocket.listen('joined-right').subscribe((data: any) => {
      console.log('join', data)
      this.avatar4 = data.src
      this.namej4 = data.username
      this.j4 = true;
    })
    
    this.WebSocket.listen('leave-top').subscribe((data: any) => {
      console.log('leave', data)
      this.avatar1 = ''
      this.j1 = false;
    })
    this.WebSocket.listen('leave-bottom').subscribe((data: any) => {
      console.log('leave', data)
      this.avatar2 = ''
      this.j2 = false;
    })
    this.WebSocket.listen('leave-left').subscribe((data: any) => {
      console.log('leave', data)
      this.avatar3 = ''
      this.j3 = false;
    })
    this.WebSocket.listen('leave-right').subscribe((data: any) => {
      console.log('leave', data)
      this.avatar4 = ''
      this.j4 = false;
    })


  }


  menu() {
    this.isModalOpen = !this.isModalOpen;
  }

  enterRoom(){
    
    console.log('entrando nessa room')
    this.nome = window.prompt('Digite seu nome')
    this.position = window.prompt('Digite sua posicao')
    this.WebSocket.emit('join', { 'username': this.nome, 'room': '1', 'posicao': this.position, 'src': '/assets/game/game/homem.png' })

  }

  changeUserTop() {
    if (!this.joinedRoomTop) {
      this.joinedRoomTop = true
      this.WebSocket.emit('join', { 'username': this.namej1, 'room': '1', 'posicao': 'top', 'src': '/assets/game/game/homem.png' })
    } else {
      this.joinedRoomTop = false
      this.WebSocket.emit('leave', { 'username': this.namej1, 'room': '1', 'posicao': 'top', 'src': '/assets/game/game/homem.png' })
    }
  }

  changeUserBottom() {
    if (!this.joinedRoomBottom) {
      this.joinedRoomBottom = true
      this.WebSocket.emit('join', { 'username': this.namej2, 'room': '1', 'posicao': 'bottom', 'src': '/assets/game/game/homem.png' })
    } else {
      this.joinedRoomBottom = false
      this.WebSocket.emit('leave', { 'username': this.namej2, 'room': '1', 'posicao': 'bottom', 'src': '/assets/game/game/homem.png' })
    }
  }
  changeUserLeft() {

    if (!this.joinedRoomLeft) {
      this.WebSocket.emit('join', { 'username': this.namej3, 'room': '1', 'posicao': 'left', 'src': '/assets/game/game/homem.png' })
      this.joinedRoomLeft = true;
    } else {
      this.joinedRoomLeft = false;
      this.WebSocket.emit('leave', { 'username': this.namej3 })
    }
  }
  changeUserRight() {

    if (!this.joinedRoomRight) {
      this.joinedRoomRight = true;
      this.WebSocket.emit('join', { 'username': this.namej4, 'room': '1', 'posicao': 'right', 'src': '/assets/game/game/homem.png' })

    } else {
      this.joinedRoomRight = false
      this.WebSocket.emit('leave', { 'username': this.namej4 })
    }
  }

}
