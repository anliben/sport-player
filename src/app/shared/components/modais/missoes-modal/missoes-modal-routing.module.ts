import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissoesModalPage } from './missoes-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MissoesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissoesModalPageRoutingModule {}
