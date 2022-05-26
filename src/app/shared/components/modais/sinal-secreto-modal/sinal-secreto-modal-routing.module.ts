import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinalSecretoModalPage } from './sinal-secreto-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SinalSecretoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinalSecretoModalPageRoutingModule {}
