import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvidarAmigosModalPageRoutingModule } from './convidar-amigos-modal-routing.module';

import { ConvidarAmigosModalPage } from './convidar-amigos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvidarAmigosModalPageRoutingModule
  ],
  declarations: [ConvidarAmigosModalPage]
})
export class ConvidarAmigosModalPageModule {}
