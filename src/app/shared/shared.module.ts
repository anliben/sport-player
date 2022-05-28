import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarMesaComponent } from './components/avatar-mesa/avatar-mesa.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { IonicModule } from '@ionic/angular';
import { CartaBaralhoComponent } from './components/carta-baralho/carta-baralho.component';
import { JackpotComponent } from './components/jackpot/jackpot.component';
import { ConfiguracaoJogoModalComponent } from './components/modais/configuracao-jogo-modal/configuracao-jogo-modal.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { TampaPComponent } from './components/tampa-p/tampa-p.component';
import { MissoesModalComponent } from './components/modais/missoes-modal/missoes-modal.component';
import { SaqueModalComponent } from './components/modais/saque-modal/saque-modal.component';
import { ConfigJogoItemComponent } from './components/config-jogo-item/config-jogo-item.component';
import { AdicionarFichasModalComponent } from './components/modais/adicionar-fichas-modal/adicionar-fichas-modal.component';
import { HistoricoMaosModalComponent } from './components/modais/historico-maos-modal/historico-maos-modal.component';
import { CGDetalhesJogoModalComponent } from './components/modais/detalhes-jogo-cashgame-modal/detalhes-jogo-cashgame-modal.component';
import { ConfirmarCompraItemModalComponent } from './components/modais/confirmar-compra-item-modal/confirmar-compra-item-modal.component';

@NgModule({
  declarations: [
    AvatarMesaComponent,
    HeaderComponent,
    PerfilComponent,
    JackpotComponent,
    ConfiguracaoJogoModalComponent,
    MesasComponent,
    CartaBaralhoComponent,
    TampaPComponent,
    MissoesModalComponent,
    SaqueModalComponent,
    ConfigJogoItemComponent,
    AdicionarFichasModalComponent,
    HistoricoMaosModalComponent,
    CGDetalhesJogoModalComponent,
    ConfirmarCompraItemModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    AvatarMesaComponent,
    HeaderComponent,
    PerfilComponent,
    JackpotComponent,
    ConfiguracaoJogoModalComponent,
    CartaBaralhoComponent,
    MesasComponent,
    TampaPComponent,
    ConfigJogoItemComponent,
  ],
})
export class SharedModule {}
