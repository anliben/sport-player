import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { webSocket } from 'rxjs/webSocket'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('play') playElemnt: any;
  @ViewChild('store') storeElemnt: any;
  @ViewChild('config') configElemnt: any;

  web;

  constructor(
  ) {
    this.web = webSocket('ws://localhost:3000');
  }

  ngOnInit() {

  }

  callPlayer(){
    this.web.next({Find: 'player'})
    this.web.subscribe((response) => {
      console.log(response);
    })

  }

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
