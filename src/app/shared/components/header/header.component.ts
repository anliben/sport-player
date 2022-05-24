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
  @Input() moeda = 125;
  @Input() diamante = 456;

  @Input() voltarBtn = false;

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
      cssClass: 'custom-class-modal-vip modal-height-vip',
    });
    return await modal.present();
  }
}
