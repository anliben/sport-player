import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaPageRoutingModule } from './mesa-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { TampaPComponent } from '../../shared/components/tampa-p/tampa-p.component';
import { Cashgame2x2Page } from './cashgame2x2/cashgame2x2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesaPageRoutingModule,
    SharedModule,
  ],
  declarations: [TampaPComponent],
  exports: [TampaPComponent],
})
export class MesaPageModule {}
