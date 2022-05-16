import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigPage } from './config/config.page';

import { HomePage } from './home.page';
import { StorePage } from './store/store.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'store',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./store/store.module').then((m) => m.StorePageModule),
          },
        ],
      },
      {
        path: 'play',
        children: [
          {
            path: '',
            loadChildren: () =>
              // import('./home.module').then((m) => m.HomePageModule),
              // import('./store/store.module').then((m) => m.StorePageModule),
              import('./play/play.module').then((m) => m.PlayPageModule),
          },
        ],
      },
      {
        path: 'config',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./config/config.module').then((m) => m.ConfigPageModule),
            // import('./store/store.module').then((m) => m.StorePageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/play',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/play',
    pathMatch: 'full',
  },

  // {
  //   path: '',
  //   component: HomePage,
  // },
  // {
  //   path: 'config',
  //   component: ConfigPage,
  // },
  // {
  //   path: 'store',
  //   component: StorePage,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
