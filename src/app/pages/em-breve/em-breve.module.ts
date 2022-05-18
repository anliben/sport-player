import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmBrevePageRoutingModule } from './em-breve-routing.module';

import { EmBrevePage } from './em-breve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmBrevePageRoutingModule
  ],
  declarations: [EmBrevePage]
})
export class EmBrevePageModule {}
