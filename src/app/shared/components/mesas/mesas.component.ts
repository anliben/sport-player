import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss'],
})
export class MesasComponent implements OnInit {
  mesas = [
    {
      "id": 1,
      "name": "Mesa 1",
      "tableType": "torneio",
      "awardTotal": "1000",
      "jackpot": null,
      "buy": "1000",
      "reBuy": false,
      "playersDistribution": "1x1",
      "AreSpectatorsAllowed": true,
      "spectators": [],
      "start_date": "2022-01-01T00:00:00.000Z",
      "start_time": "2022-01-01T00:00:00.000Z",
      "update_at": "2022-01-01T00:00:00.000Z",
      "create_at": "2022-01-01T00:00:00.000Z",
      "status": "LIVRE",
      "gameMode": "limpo",
      "rules": "paulista"
    },
    {
      "id": 1,
      "name": "Mesa 1",
      "tableType": "torneio",
      "awardTotal": "100",
      "jackpot": null,
      "buy": "1000",
      "reBuy": false,
      "playersDistribution": "1x1",
      "AreSpectatorsAllowed": true,
      "spectators": [],
      "start_date": "2022-01-01T00:00:00.000Z",
      "start_time": "2022-01-01T00:00:00.000Z",
      "update_at": "2022-01-01T00:00:00.000Z",
      "create_at": "2022-01-01T00:00:00.000Z",
      "status": "LIVRE",
      "gameMode": "limpo",
      "rules": "mineiro"
    },
    {
      "id": 1,
      "name": "Mesa 1",
      "tableType": "torneio",
      "awardTotal": "1000",
      "jackpot": null,
      "buy": "100",
      "reBuy": false,
      "playersDistribution": "1x1",
      "AreSpectatorsAllowed": true,
      "spectators": [],
      "start_date": "2022-01-01T00:00:00.000Z",
      "start_time": "2022-01-01T00:00:00.000Z",
      "update_at": "2022-01-01T00:00:00.000Z",
      "create_at": "2022-01-01T00:00:00.000Z",
      "status": "LIVRE",
      "gameMode": "limpo",
      "rules": "mineiro"
    },
    
    {
      "id": 1,
      "name": "Mesa 1",
      "tableType": "cashgame",
      "awardTotal": "1000",
      "jackpot": null,
      "buy": "100",
      "reBuy": false,
      "playersDistribution": "1x1",
      "AreSpectatorsAllowed": true,
      "spectators": [],
      "start_date": "2022-01-01T00:00:00.000Z",
      "start_time": "2022-01-01T00:00:00.000Z",
      "update_at": "2022-01-01T00:00:00.000Z",
      "create_at": "2022-01-01T00:00:00.000Z",
      "status": "LIVRE",
      "gameMode": "limpo",
      "rules": "paulista"
    },
    
    {
      "id": 1,
      "name": "Mesa 1",
      "tableType": "cashgame",
      "awardTotal": "1000",
      "jackpot": null,
      "buy": "100",
      "reBuy": false,
      "playersDistribution": "1x1",
      "AreSpectatorsAllowed": true,
      "spectators": [],
      "start_date": "2022-01-01T00:00:00.000Z",
      "start_time": "2022-01-01T00:00:00.000Z",
      "update_at": "2022-01-01T00:00:00.000Z",
      "create_at": "2022-01-01T00:00:00.000Z",
      "status": "LIVRE",
      "gameMode": "limpo",
      "rules": "mineiro"
    }
  ];
  mesasTorneio = [];
  mesasCashgame = [];

  constructor() { }

  ngOnInit() {
    
    console.log(this.mesasCashgame);
    for (let index = 0; index < this.mesas.length; index++) {
      if(this.mesas[index].tableType === 'torneio'){
        this.mesasTorneio.push(this.mesas[index]);
      }else if (this.mesas[index].tableType === 'cashgame'){
        this.mesasCashgame.push(this.mesas[index]);
      }
      
    }
    
  
  }

}
