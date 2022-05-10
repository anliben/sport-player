import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarMesaComponent } from './components/avatar-mesa/avatar-mesa.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { IonicModule } from '@ionic/angular';
import { CartaBaralhoComponent } from './components/carta-baralho/carta-baralho.component';
import { JackpotComponent } from './components/jackpot/jackpot.component';

@NgModule({
  declarations: [
    AvatarMesaComponent,
    HeaderComponent,
    PerfilComponent,
    CartaBaralhoComponent,
    JackpotComponent,
  ],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [
    CommonModule,
    AvatarMesaComponent,
    HeaderComponent,
    PerfilComponent,
    JackpotComponent,
    CartaBaralhoComponent,
  ],
})
export class SharedModule {}
