import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PainelJogadorPage } from './painel-jogador.page';

const routes: Routes = [
  {
    path: '',
    component: PainelJogadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PainelJogadorPageRoutingModule {}
