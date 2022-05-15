import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaPageRoutingModule } from './mesa-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { TampaPComponent } from '../../shared/components/tampa-p/tampa-p.component';

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
