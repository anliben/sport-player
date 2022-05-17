import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  changeScreen(screen: any) {
    this.router.navigate([screen]);
  }
}
