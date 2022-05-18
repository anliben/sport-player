import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { VerifyComponent } from './auth/verify/verify.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cashgame2x2',
    loadChildren: () =>
      import('./pages/mesa/cashgame2x2/cashgame2x2.module').then(
        (m) => m.Cashgame2x2PageModule
      ),
  },
  {
    path: 'cashgame1x1',
    loadChildren: () =>
      import('./pages/mesa/cashgame1x1/cashgame1x1.module').then(
        (m) => m.Cashgame1x1PageModule
      ),
  },
  {
    path: 'torneio1x1',
    loadChildren: () =>
      import('./pages/mesa/torneio1x1/torneio1x1.module').then(
        (m) => m.Torneio1x1PageModule
      ),
  },
  {
    path: 'torneio2x2',
    loadChildren: () =>
      import('./pages/mesa/torneio2x2/torneio2x2.module').then(
        (m) => m.Torneio2x2PageModule
      ),
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

    loadChildren: () =>
      import('./pages/poker/poker.module').then((m) => m.PokerPageModule),
  },
  {
    path: 'verify',
    component: VerifyComponent,
  },
  {
    path: 'clube',
    loadChildren: () =>
      import('./pages/clube/clube.module').then((m) => m.ClubePageModule),
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'disconnected',
    loadChildren: () => import('./pages/disconnected/disconnected.module').then( m => m.DisconnectedPageModule)
  },
  {
    path: 'painel-jogador',
    loadChildren: () => import('./pages/painel-jogador/painel-jogador.module').then( m => m.PainelJogadorPageModule)
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
export class AppRoutingModule { }
