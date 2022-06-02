import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rank-modal',
  templateUrl: './rank-modal.component.html',
  styleUrls: ['./rank-modal.component.scss'],
})
export class RankModalComponent implements OnInit {

  seasonDate:any[] = [
    {
      "id": 1,
      "season": 1,
      "start": {
        "date": "01/01",
        "hour": "00:00"
      },
      "end": {
        "date": "01/03",
        "hour": "00:00"
      },
      "status": "passada"
    },
    {
      "id": 2,
      "season": 2,
      "start": {
        "date": "01/01",
        "hour": "00:00"
      },
      "end": {
        "date": "01/03",
        "hour": "00:00"
      },
      "status": "atual"
    }
  ]
  rankPlayers:any[] = [
    {
      "season": 1,
      "ranks": [
        {
          "id": 1,
          "season": 1,
          "name": "carlos",
          "award": 9000
        },
        {
          "id": 2,
          "season": 1,
          "name": "Maria",
          "award": 900
        },
        {
          "id": 3,
          "season": 1,
          "name": "Pedro",
          "award": 90
        },
        {
          "id": 4,
          "season": 1,
          "name": "Carol",
          "award": 9
        }
      ]
    },
    {
      "season": 2,
      "ranks": [
        {
          "id": 1,
          "season": 2,
          "name": "Roberto",
          "award": 9000
        }
      ]
    }
  ]
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  back(){
    this.modalController.dismiss();
  }

}
