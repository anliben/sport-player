import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cashgame1x1PageRoutingModule } from './cashgame1x1-routing.module';

import { Cashgame1x1Page } from './cashgame1x1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cashgame1x1PageRoutingModule
  ],
  declarations: [Cashgame1x1Page]
})
export class Cashgame1x1PageModule {}
