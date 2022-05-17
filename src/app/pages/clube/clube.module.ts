import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubePageRoutingModule } from './clube-routing.module';

import { ClubePage } from './clube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubePageRoutingModule
  ],
  declarations: [ClubePage]
})
export class ClubePageModule {}
