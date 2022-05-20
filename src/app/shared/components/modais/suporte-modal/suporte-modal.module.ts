import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuporteModalPageRoutingModule } from './suporte-modal-routing.module';

import { SuporteModalPage } from './suporte-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuporteModalPageRoutingModule
  ],
  declarations: [SuporteModalPage]
})
export class SuporteModalPageModule {}
