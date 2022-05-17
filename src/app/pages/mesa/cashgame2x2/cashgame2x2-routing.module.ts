import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cashgame2x2Page } from './cashgame2x2.page';

const routes: Routes = [
  {
    path: '',
    component: Cashgame2x2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cashgame2x2PageRoutingModule {}
