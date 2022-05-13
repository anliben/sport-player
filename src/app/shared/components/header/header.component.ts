import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() moeda: number;
  @Input() diamante: number;

  backButton = true

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.router.url === '/')
      this.backButton = false
  }

  back() {
    this.navCtrl.back()
  }
}
