import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-em-breve',
  templateUrl: './em-breve.page.html',
  styleUrls: ['./em-breve.page.scss'],
  providers: [NavParams],
})
export class EmBrevePage implements OnInit {
  hideBtnVoltar = true;

  constructor(private router: Router, private navParams: NavParams) {
    this.hideBtnVoltar = !!this.navParams.get('hideBtnVoltar') ? true : false;
  }

  ngOnInit() {}

  back() {
    this.router.navigate(['']);
  }
}
