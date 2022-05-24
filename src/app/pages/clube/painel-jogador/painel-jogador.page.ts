import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-painel-jogador',
  templateUrl: './painel-jogador.page.html',
  styleUrls: ['./painel-jogador.page.scss'],
})
export class PainelJogadorPage implements OnInit {
  moeda = 10;
  infoDados = false;
  infoRakeoooo = false;
  infoRakeccc = false;
  infoRakecc = false;
  infoRakeConvidado = false;
  infoRakeBack = false;

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  clickinfoRakeoooo(){
    this.infoRakeoooo = !this.infoRakeoooo;
    console.log(this.infoRakeoooo);
  }
  back() {
    this.navController.back();
  }
}
