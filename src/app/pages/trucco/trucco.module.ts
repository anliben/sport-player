import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TruccoPageRoutingModule } from './trucco-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TruccoPageRoutingModule,
    SharedModule,
  ],

  declarations: []
})
export class TruccoPageModule {}
