import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilClubePageRoutingModule } from './perfil-clube-routing.module';

import { PerfilClubePage } from './perfil-clube.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilClubePageRoutingModule,
    SharedModule,
  ],
  declarations: [PerfilClubePage],
  entryComponents: [PerfilClubePage],
})
export class PerfilClubePageModule {}
