import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AvatarMesaComponent } from './components/avatar-mesa/avatar-mesa.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
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
import { PagamentoModalComponent } from './components/modais/pagamento-modal/pagamento-modal.component';
import { AmigosModalComponent } from './components/modais/amigos-modal/amigos-modal.component';
import { AmigosSolicilatoesComponent } from './components/modais/amigos-solicilatoes/amigos-solicilatoes.component';
import { ChatJogoModalComponent } from './components/modais/chat-jogo-modal/chat-jogo-modal.component';
import { MensagensRecebidasModalComponent } from './components/modais/mensagens-recebidas-modal/mensagens-recebidas-modal.component';
import { MensagensEnviadasModalComponent } from './components/modais/mensagens-enviadas-modal/mensagens-enviadas-modal.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
    AdicionarFichasModalComponent,
    HistoricoMaosModalComponent,
    CGDetalhesJogoModalComponent,
    ConfirmarCompraItemModalComponent,
    PagamentoModalComponent,
    ConfigJogoItemComponent,
    AmigosModalComponent,
    AmigosSolicilatoesComponent,
    ChatJogoModalComponent,
    MensagensRecebidasModalComponent,
    MensagensEnviadasModalComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
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
