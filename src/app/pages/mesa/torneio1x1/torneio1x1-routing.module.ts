import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Torneio1x1Page } from './torneio1x1.page';

const routes: Routes = [
  {
    path: '',
    component: Torneio1x1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Torneio1x1PageRoutingModule {}
