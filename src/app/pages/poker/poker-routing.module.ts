import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokerPage } from './poker.page';

const routes: Routes = [
  {
    path: '',
    component: PokerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokerPageRoutingModule {}
