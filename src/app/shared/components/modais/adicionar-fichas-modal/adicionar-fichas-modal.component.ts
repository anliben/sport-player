import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PagamentoModalComponent } from '../pagamento-modal/pagamento-modal.component';

@Component({
  selector: 'app-adicionar-fichas-modal',
  templateUrl: './adicionar-fichas-modal.component.html',
  styleUrls: ['./adicionar-fichas-modal.component.scss'],
})
export class AdicionarFichasModalComponent implements OnInit {

  valueReal: any = 100;
  quantityFiles: any;
  constructor(private modalController: ModalController ) { }

  ngOnInit() {}

  async showPagamentoModal(){
    
    if (this.quantityFiles > 0){
      const modal = await this.modalController.create({
        component: PagamentoModalComponent,
        cssClass: 'custom-class-modal-pagamento modal-height-pagamento',
      });
      return await modal.present();
    }
  }

  back(){
    this.modalController.dismiss();
  }
}
