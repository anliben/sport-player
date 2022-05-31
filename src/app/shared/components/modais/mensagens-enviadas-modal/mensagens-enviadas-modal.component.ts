import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MensagensRecebidasModalComponent } from '../mensagens-recebidas-modal/mensagens-recebidas-modal.component';

@Component({
  selector: 'app-mensagens-enviadas-modal',
  templateUrl: './mensagens-enviadas-modal.component.html',
  styleUrls: ['./mensagens-enviadas-modal.component.scss'],
})
export class MensagensEnviadasModalComponent implements OnInit {
  messagesRecived: any[] = [
 
    {
      "topic": "Atualizações Teste",
      "message": "Cardápios personalizado\nGráfico de evolução\nPesquisa de satisfação\nAtendimento",
      "sender": "ADM",
      "date": "14-02-2022",
      "hour": "20:00:00"
    },
    {
      "topic": "Veja novas formas de você jogar o jogo e aprenda a ganhar mais",
      "message": "Novas Atualizações sobre\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nXXXXXXXXXXXXXXXXXXXXX\nXXXXXXXXXXX",
      "sender": "ADM",
      "date": "14-02-2022",
      "hour": "20:00:00"
    }

]
constructor(private modalController: ModalController) { }

ngOnInit() {}

async showMessageModal(){
  this.dismiss()
  const modal = await this.modalController.create({
    component: MensagensRecebidasModalComponent,
    cssClass: 'custom-class-modal-missoes modal-height-menssagens',
  });

  return await modal.present();
}

dismiss() {
  this.modalController.dismiss();
}
}
