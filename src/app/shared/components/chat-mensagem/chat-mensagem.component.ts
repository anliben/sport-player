import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-mensagem',
  templateUrl: './chat-mensagem.component.html',
  styleUrls: ['./chat-mensagem.component.scss'],
})
export class ChatMensagemComponent implements OnInit {
  @Input() eu: boolean;
  @Input() src: string;
  @Input() playerName: string;
  @Input() message: string;
  @Input() timeMessageSent: string;

  constructor() {}

  ngOnInit() {}
}
