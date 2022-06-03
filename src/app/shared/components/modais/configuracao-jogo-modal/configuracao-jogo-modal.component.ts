import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracao-jogo-modal',
  templateUrl: './configuracao-jogo-modal.component.html',
  styleUrls: ['./configuracao-jogo-modal.component.scss'],
})
export class ConfiguracaoJogoModalComponent implements OnInit {
  volume = 0.5;
  constructor() {}

  ngOnInit() {}

  setVolume() {
    console.log('aumentandio o volume');
  }
}
