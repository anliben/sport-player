import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() moeda: number = 125;
  @Input() diamante: number = 456;

  @Input() voltarBtn: boolean = false;

  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

  navigateStore = () => this.router.navigate(['/store']);
}
