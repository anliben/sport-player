import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  @ViewChild('play') playElemnt: any;
  @ViewChild('store') storeElemnt: any;
  @ViewChild('config') configElemnt: any;

  elemntHidden(e: any, idx1: number, idx2?: number) {
    e.nativeElement.childNodes[idx1].style.visibility = 'hidden';
    if (idx2) {
      e.nativeElement.childNodes[idx2].style.visibility = 'hidden';
    }
  }
  elemntVisible(e: any, idx1: number, idx2?: number) {
    e.nativeElement.childNodes[idx1].style.visibility = 'visible';
    if (idx2) {
      e.nativeElement.childNodes[idx2].style.visibility = 'visible';
    }
  }

  selectedTab(e: any) {
    this.elemntHidden(this.playElemnt, 0, 2);
    this.elemntHidden(this.storeElemnt, 1);
    this.elemntHidden(this.configElemnt, 0);
    if (e.tab === 'play') {
      this.elemntVisible(this.playElemnt, 0, 2);
    } else if (e.tab === 'store') {
      this.elemntVisible(this.storeElemnt, 1);
    } else if (e.tab === 'config') {
      this.elemntVisible(this.configElemnt, 0);
    }
  }
}

// this.playElemnt.nativeElement.childNodes[0].classList.add(
//   'animate-bounce'
// );
// this.playElemnt.nativeElement.childNodes[2].classList.add(
//   'animate-bounce'
// );
