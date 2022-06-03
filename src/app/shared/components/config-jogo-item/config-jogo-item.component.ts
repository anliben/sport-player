import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-jogo-item',
  templateUrl: './config-jogo-item.component.html',
  styleUrls: ['./config-jogo-item.component.scss'],
})
export class ConfigJogoItemComponent implements OnInit {
  @Input() srcImg: string;
  @Input() srcImgClass: string;
  @Input() titleItem: string;

  constructor() {}

  ngOnInit() {}

  applyCustomClass(e: any) {
    if (e) {
      return {
        [e.toString()]: e !== undefined,
      };
    }
  }
}
