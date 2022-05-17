import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cashgame1x1PageRoutingModule } from './cashgame1x1-routing.module';

import { Cashgame1x1Page } from './cashgame1x1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cashgame1x1PageRoutingModule,
    SharedModule
  ],
  declarations: [Cashgame1x1Page]
})
export class Cashgame1x1PageModule {}
