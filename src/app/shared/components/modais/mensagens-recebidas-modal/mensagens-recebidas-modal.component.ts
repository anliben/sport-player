import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MensagensEnviadasModalComponent } from '../mensagens-enviadas-modal/mensagens-enviadas-modal.component';
import { MessagensRecebidasService } from './messagens-recebidas.service';

@Component({
  selector: 'app-mensagens-recebidas-modal',
  templateUrl: './mensagens-recebidas-modal.component.html',
  styleUrls: ['./mensagens-recebidas-modal.component.scss'],
})
export class MensagensRecebidasModalComponent implements OnInit {
  
  messagesRecived: any[] = [];
  showMessage: any;

  constructor(private modalController: ModalController, private service: MessagensRecebidasService) { }

  ngOnInit() {
    this.service.getRecivedMessages().subscribe((res)=>{
      this.messagesRecived = res;
      console.log(this.messagesRecived);
    })
    
  }

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

  viewMessage(id){
    const idMessage = id;
    this.service.getRecivedMessages().subscribe((res)=>{
      res.forEach((item)=>{        
        if(item._id === idMessage){
          this.showMessage = item;
          console.log(this.showMessage);
        }
      })  
    })
  }

  backMessageList(){
    this.showMessage = undefined;
  }

}
