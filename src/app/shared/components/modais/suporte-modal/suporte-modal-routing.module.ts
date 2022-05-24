import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuporteModalPage } from './suporte-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SuporteModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuporteModalPageRoutingModule {}
