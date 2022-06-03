import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pagamento-modal',
  templateUrl: './pagamento-modal.component.html',
  styleUrls: ['./pagamento-modal.component.scss'],
})
export class PagamentoModalComponent implements OnInit {

  pixCode = "fj834292c8nwru8943vcfrgdrf dshbgdfsh54g534fqwfverabrbwertbw32hbgdfsh54g534fqwfverabrbwertbw32trshtrhbtrswbnrnrwnyrtentyntye4231243212342314242315321";
  date = "25-05-2022 08:40:02"
  time:any ='00:00:00';
  valueReal: any = 100;
  quantityFiles: any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  back(){
    this.modalController.dismiss();
  }
  
}
