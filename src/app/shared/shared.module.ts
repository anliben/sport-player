import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarMesaComponent } from './components/avatar-mesa/avatar-mesa.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { MesaComponent } from './components/mesa/mesa.component';



@NgModule({
  declarations: [
    AvatarMesaComponent,
    HeaderComponent,
    PerfilComponent,
    MesaComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [
    CommonModule,
    AvatarMesaComponent,
    HeaderComponent,
    PerfilComponent,
    MesaComponent
  ]
})
export class SharedModule { }
