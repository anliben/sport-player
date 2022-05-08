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

  constructor() { }

  ngOnInit() { }

}
