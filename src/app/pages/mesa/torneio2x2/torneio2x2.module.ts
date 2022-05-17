import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Torneio2x2PageRoutingModule } from './torneio2x2-routing.module';

import { Torneio2x2Page } from './torneio2x2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Torneio2x2PageRoutingModule
  ],
  declarations: [Torneio2x2Page]
})
export class Torneio2x2PageModule {}
