import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { VipModalPage } from '../modais/vip-modal/vip-modal.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() moeda: number = 125;
  @Input() diamante: number = 456;

  @Input() voltarBtn: boolean = false;

  constructor(
    private navCtrl: NavController, 
    private router: Router,
    private modalCtrl: ModalController
    ) {}

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

  navigateStore = () => this.router.navigate(['/store']);

  async showVipModal(){
    const modal = await this.modalCtrl.create({
      component: VipModalPage,
      cssClass: 'custom-class-modal modal-h40-height',
    });
    
    return await modal.present();
  }
}
