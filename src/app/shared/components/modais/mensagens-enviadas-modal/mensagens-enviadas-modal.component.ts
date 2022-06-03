import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MensagensRecebidasModalComponent } from '../mensagens-recebidas-modal/mensagens-recebidas-modal.component';
import { MensagensEnviadasService } from './mensagens-enviadas.service';

@Component({
  selector: 'app-mensagens-enviadas-modal',
  templateUrl: './mensagens-enviadas-modal.component.html',
  styleUrls: ['./mensagens-enviadas-modal.component.scss'],
})
export class MensagensEnviadasModalComponent implements OnInit {
  
  showMessage: any;
  sendedMessages: any[] = [];
  
constructor(private modalController: ModalController, private service: MensagensEnviadasService) { }

ngOnInit() {
  this.service.getsendedMessages().subscribe((res)=>{
    this.sendedMessages = res;
    console.log(this.sendedMessages);
  });
}

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

viewMessage(id){
  const idMessage = id;
  this.service.getsendedMessages().subscribe((res)=>{
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
