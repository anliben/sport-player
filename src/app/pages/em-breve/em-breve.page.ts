import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-em-breve',
  templateUrl: './em-breve.page.html',
  styleUrls: ['./em-breve.page.scss'],
})
export class EmBrevePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['']);
  }
}
