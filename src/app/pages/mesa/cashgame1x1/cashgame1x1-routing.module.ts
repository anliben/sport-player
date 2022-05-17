import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cashgame1x1Page } from './cashgame1x1.page';

const routes: Routes = [
  {
    path: '',
    component: Cashgame1x1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cashgame1x1PageRoutingModule {}
