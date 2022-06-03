import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubePage } from './clube.page';

const routes: Routes = [
  {
    path: '',
    component: ClubePage
  },
  {
    path: 'perfil-clube',
    loadChildren: () => import('./perfil-clube/perfil-clube.module').then( m => m.PerfilClubePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubePageRoutingModule {}
