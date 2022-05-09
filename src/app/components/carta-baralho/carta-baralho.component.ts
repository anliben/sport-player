import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta-baralho',
  templateUrl: './carta-baralho.component.html',
  styleUrls: ['./carta-baralho.component.scss'],
})
export class CartaBaralhoComponent implements OnInit {
  @Input() naipe: string;
  @Input() numero: string;

  constructor() {}

  ngOnInit() {}
}
