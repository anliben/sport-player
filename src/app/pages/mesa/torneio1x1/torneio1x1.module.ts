import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Torneio1x1PageRoutingModule } from './torneio1x1-routing.module';

import { Torneio1x1Page } from './torneio1x1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Torneio1x1PageRoutingModule
  ],
  declarations: [Torneio1x1Page]
})
export class Torneio1x1PageModule {}
