import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MensagensEnviadasModalComponent } from '../mensagens-enviadas-modal/mensagens-enviadas-modal.component';

@Component({
  selector: 'app-mensagens-recebidas-modal',
  templateUrl: './mensagens-recebidas-modal.component.html',
  styleUrls: ['./mensagens-recebidas-modal.component.scss'],
})
export class MensagensRecebidasModalComponent implements OnInit {
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
      },
      {
        "topic": "Veja novas formas de você jogar o jogo e aprenda a ganhar mais",
        "message": "Novas Atualizações sobre\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nXXXXXXXXXXXXXXXXXXXXX\nXXXXXXXXXXX",
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

  async showSendMessageModal(){
    this.dismiss()
    const modal = await this.modalController.create({
      component: MensagensEnviadasModalComponent,
      cssClass: 'custom-class-modal-missoes modal-height-menssagens',
    });

    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
