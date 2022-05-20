import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubePageRoutingModule } from './clube-routing.module';

import { ClubePage } from './clube.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { SharedModule } from '../../shared/shared.module';
import { PerfilJogadorComponent } from './perfil-jogador/perfil-jogador.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubePageRoutingModule,
    SuperTabsModule,
    SharedModule,
    ScrollingModule
  ],
  declarations: [ ClubePage, PerfilJogadorComponent],
})
export class ClubePageModule {}
