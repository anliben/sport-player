import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissoesModalPageRoutingModule } from './missoes-modal-routing.module';

import { MissoesModalPage } from './missoes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissoesModalPageRoutingModule
  ],
  declarations: [MissoesModalPage]
})
export class MissoesModalPageModule {}
