import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PainelJogadorPageRoutingModule } from './painel-jogador-routing.module';

import { PainelJogadorPage } from './painel-jogador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PainelJogadorPageRoutingModule
  ],
  declarations: [PainelJogadorPage]
})
export class PainelJogadorPageModule {}
