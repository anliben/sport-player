import { Component, Input, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-avatar-mesa',
  templateUrl: './avatar-mesa.component.html',
  styleUrls: ['./avatar-mesa.component.scss'],
})
export class AvatarMesaComponent implements OnInit {
  @Input() avatar: string;
  @Input() cartas: string;
  @Input() nome: string;
  @Input() joined: boolean = false;
  @Input() cardDirection: string = 'left';
  @Input() eu: boolean = false; // prop eu para aprecer minhas cartas.
  @Input() cards: object[] = [];

  constructor() {}

  ngOnInit() {}

  onClickLog(i) {
    console.log('Click event: ', i);
  }
}
