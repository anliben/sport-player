import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubePageRoutingModule } from './clube-routing.module';

import { ClubePage } from './clube.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { SharedModule } from '../../shared/shared.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PerfilClubePageModule } from './perfil-clube/perfil-clube.module';
import { EmBrevePageModule } from '../em-breve/em-breve.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubePageRoutingModule,
    SuperTabsModule,
    PerfilClubePageModule,
    EmBrevePageModule,
    SharedModule,
    ScrollingModule,
  ],
  declarations: [ClubePage],
})
export class ClubePageModule {}
