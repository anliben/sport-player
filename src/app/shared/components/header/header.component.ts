import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { VipModalPage } from '../modais/vip-modal/vip-modal.page';
import { RankModalComponent } from '../modais/rank-modal/rank-modal.component';
import { StorageServiceService } from 'src/app/services/storage-service.service';

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
    private modalCtrl: ModalController,
    private storageService: StorageServiceService
  ) {}

  ngOnInit() {
    this.storageService.getItem('player').then((player: any) => {
      this.moeda = player.gold;
      this.diamante = player.diamond;
    });
  }

  back() {
    this.navCtrl.navigateBack('/');
  }

  navigateStore = () => this.router.navigate(['/store']);

  async showVipModal() {
    const modal = await this.modalCtrl.create({
      component: VipModalPage,
      cssClass: 'custom-class-modal-vip modal-height-vip',
    });
    return await modal.present();
  }

  async showRankModal() {
    const modal = await this.modalCtrl.create({
      component: RankModalComponent,
      cssClass: 'custom-class-modal-rank modal-height-vip',
    });
    return await modal.present();
  }
}
