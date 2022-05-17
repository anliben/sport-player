import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cashgame2x2PageRoutingModule } from './cashgame2x2-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cashgame2x2PageRoutingModule,
    SharedModule
  ],
  declarations: [],
  exports: [],
})
export class Cashgame2x2PageModule {}
