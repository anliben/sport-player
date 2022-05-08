import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TruccoPage } from './trucco.page';

const routes: Routes = [
  {
    path: '',
    component: TruccoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TruccoPageRoutingModule {}
