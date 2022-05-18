import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-painel-jogador',
  templateUrl: './painel-jogador.page.html',
  styleUrls: ['./painel-jogador.page.scss'],
})
export class PainelJogadorPage implements OnInit {
  moeda = 10;
  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navController.back();
  }
}
