import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trucco',
  templateUrl: './trucco.page.html',
  styleUrls: ['./trucco.page.scss'],
})
export class TruccoPage implements OnInit {
  diamante = 9999;
  moeda = 9999;
  constructor(private router: Router) {}

  ngOnInit() {}

  back() {
    this.router.navigate(['']);
  }
}
