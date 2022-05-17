import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.page.html',
  styleUrls: ['./poker.page.scss'],
})
export class PokerPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['']);
  }
}
