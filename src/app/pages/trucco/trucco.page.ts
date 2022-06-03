import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-trucco',
  templateUrl: './trucco.page.html',
  styleUrls: ['./trucco.page.scss'],
  providers: [NavParams],
})
export class TruccoPage implements OnInit {
  diamante = 9999;
  moeda = 9999;
  hideHeader = false;
  constructor(private router: Router, private navParams: NavParams) {
    this.hideHeader = !!this.navParams.get('hideHeader') ? true : false;
  }

  ngOnInit() {}

  back() {
    this.router.navigate(['']);
  }
}
