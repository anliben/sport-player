import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvidarAmigosModalPage } from './convidar-amigos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConvidarAmigosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvidarAmigosModalPageRoutingModule {}
