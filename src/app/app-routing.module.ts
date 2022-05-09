import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConfigPage } from './pages/home/config/config.page';
import { HomePage } from './pages/home/home.page';
import { MesaPage } from './pages/mesa/mesa.page';
import { TruccoPage } from './pages/trucco/trucco.page';

const routes: Routes = [
  {
    path: '',
    component: MesaPage,
  },
  {
    path: 'mesa',
    component: MesaPage,
  },
  {
    path: 'trucco',
    component: TruccoPage,
  },
  {
    path: 'config',
    component: ConfigPage,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
