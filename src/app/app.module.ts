import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomePage } from './pages/home/home.page';
import { MesaPage } from './pages/mesa/mesa.page';
import { StorePage } from './pages/home/store/store.page';
import { ConfigPage } from './pages/home/config/config.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MesaPageModule } from './pages/mesa/mesa.module';
import { TruccoPage } from './pages/trucco/trucco.page';
import { PokerPage } from './pages/poker/poker.page';
import { LoginComponent } from './auth/login/login.component';

import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase,
} from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { VerifyComponent } from './auth/verify/verify.component';
import { Cashgame2x2Page } from './pages/mesa/cashgame2x2/cashgame2x2.page';
import { Cashgame2x2PageModule } from './pages/mesa/cashgame2x2/cashgame2x2.module';
import { Cashgame1x1Page } from './pages/mesa/cashgame1x1/cashgame1x1.page';
import { Torneio1x1Page } from './pages/mesa/torneio1x1/torneio1x1.page';
import { Torneio2x2Page } from './pages/mesa/torneio2x2/torneio2x2.page';
import { Cashgame1x1PageModule } from './pages/mesa/cashgame1x1/cashgame1x1.module';
import { Torneio1x1PageModule } from './pages/mesa/torneio1x1/torneio1x1.module';
import { Torneio2x2PageModule } from './pages/mesa/torneio2x2/torneio2x2.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { RegisterComponent } from './auth/register/register.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBz6Tn9WSVpHKgJqMBs5o6bpW3FvwpOVwQ',
  authDomain: 'sport-player-e6850.firebaseapp.com',
  databaseURL: 'https://sport-player-e6850-default-rtdb.firebaseio.com',
  projectId: 'sport-player-e6850',
  storageBucket: 'sport-player-e6850.appspot.com',
  messagingSenderId: '327499355483',
  appId: '1:327499355483:web:695d5ffdfd998350ce767e',
  measurementId: 'G-09SNC100S8',
};

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    MesaPage,
    StorePage,
    TruccoPage,
    ConfigPage,
    PokerPage,
    RegisterComponent,
    LoginComponent,
    VerifyComponent,
    Cashgame2x2Page,
    Cashgame1x1Page,
    Torneio1x1Page,
    Torneio2x2Page,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    SharedModule,
    MesaPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ScrollingModule,
    ReactiveFormsModule,
    SuperTabsModule.forRoot(),
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TranslateService,
    AngularFireDatabase,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
