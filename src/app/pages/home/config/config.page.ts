import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  brightness: number = 100;
  type = '';
  constructor() { }

  ngOnInit() {
  }
  select(type){
    if(this.type !== type){
      this.type = type;
    }else{
      this.type = '';
    }
  }
}
