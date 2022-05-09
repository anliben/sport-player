import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigPage } from './config/config.page';

import { HomePage } from './home.page';
import { StorePage } from './store/store.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'config',
    component: ConfigPage
  },
  {
    path: 'store',
    component: StorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
