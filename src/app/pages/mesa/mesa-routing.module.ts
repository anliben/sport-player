import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesaPage } from './mesa.page';

const routes: Routes = [
  {
    path: '',
    component: MesaPage
  },

  {
    path: 'cashgame1x1',
    loadChildren: () => import('./cashgame1x1/cashgame1x1.module').then( m => m.Cashgame1x1PageModule)
  },
  {
    path: 'torneio1x1',
    loadChildren: () => import('./torneio1x1/torneio1x1.module').then( m => m.Torneio1x1PageModule)
  },
  {
    path: 'torneio2x2',
    loadChildren: () => import('./torneio2x2/torneio2x2.module').then( m => m.Torneio2x2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesaPageRoutingModule {}
