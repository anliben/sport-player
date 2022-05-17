import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Torneio2x2Page } from './torneio2x2.page';

const routes: Routes = [
  {
    path: '',
    component: Torneio2x2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Torneio2x2PageRoutingModule {}
