import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  storeItens: any [] = [
    {
      "id": 1,
      "price": 100,
      "type": "vip",
      "dayVip": 30,
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    },
    {
      "id": 2,
      "price": 100,
      "type": "vip",
      "dayVip": 60,
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    },
    {
      "id": 3,
      "price": 100,
      "type": "vip",
      "dayVip": 90,
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    },
    {
      "id": 4,
      "price": 100,
      "type": "diamante",
      "quantity": 500,
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    },
    {
      "id": 5,
      "price": 100,
      "type": "diamante",
      "quantity": 1000,
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    },
    {
      "id": 6,
      "price": 100,
      "type": "diamante",
      "quantity": 2000,
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    },
    {
      "id": 7,
      "price": 100,
      "type": "emoji",
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    },
    {
      "id": 8,
      "price": 100,
      "type": "emoji",
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    },
    {
      "id": 9,
      "price": 100,
      "type": "emoji",
      "item": "lorem",
      "imgItem": "../../../../assets/game/game/diamente.png"
    }
    
  ];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.storeItens.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
