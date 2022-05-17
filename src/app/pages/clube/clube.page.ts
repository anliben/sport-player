import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clube',
  templateUrl: './clube.page.html',
  styleUrls: ['./clube.page.scss'],
})
export class ClubePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  back() {
    this.navCtrl.back();
  }

  ngOnInit() {}
}
