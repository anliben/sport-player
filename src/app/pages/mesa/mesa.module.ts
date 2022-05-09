import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesaPageRoutingModule } from './mesa-routing.module';

import { MesaPage } from './mesa.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartaBaralhoComponent } from 'src/app/components/carta-baralho/carta-baralho.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesaPageRoutingModule,
    SharedModule,
  ],
  declarations: [MesaPage, CartaBaralhoComponent],
})
export class MesaPageModule {}
