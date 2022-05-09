import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigPage } from './config/config.page';
import { StorePage } from './store/store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    ConfigPage,
    StorePage
  ]
})
export class HomePageModule {}