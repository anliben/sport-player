import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-baralho',
  templateUrl: './carta-baralho.component.html',
  styleUrls: ['./carta-baralho.component.scss'],
})
export class CartaBaralhoComponent implements OnInit {
  @Input() naipe: string;
  @Input() numero: string;

  naipes: object;

  private getNaipeSrc() {
    this.naipes = {
      paus: '../../../assets/game/naipes/paus.png',
      ouros: '../../../assets/game/naipes/ouros.png',
      espadas: '../../../assets/game/naipes/espadas.png',
      copas: '../../../assets/game/naipes/copas.png',
    };
    return this.naipes[this.naipe] ? this.naipes[this.naipe] : '';
  }

  constructor() {}

  ngOnInit() {}
}
