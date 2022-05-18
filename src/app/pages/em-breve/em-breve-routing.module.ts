import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmBrevePage } from './em-breve.page';

const routes: Routes = [
  {
    path: '',
    component: EmBrevePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmBrevePageRoutingModule {}
