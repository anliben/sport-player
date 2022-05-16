import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'mesa',
    loadChildren: () =>
      import('./pages/mesa/mesa.module').then((m) => m.MesaPageModule),
  },
  {
    path: 'trucco',
    loadChildren: () =>
      import('./pages/trucco/trucco.module').then((m) => m.TruccoPageModule),
  },
  {
    path: 'poker',
    loadChildren: () => import('./pages/poker/poker.module').then( m => m.PokerPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
