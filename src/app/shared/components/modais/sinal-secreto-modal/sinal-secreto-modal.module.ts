import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinalSecretoModalPageRoutingModule } from './sinal-secreto-modal-routing.module';

import { SinalSecretoModalPage } from './sinal-secreto-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinalSecretoModalPageRoutingModule
  ],
  declarations: [SinalSecretoModalPage]
})
export class SinalSecretoModalPageModule {}
