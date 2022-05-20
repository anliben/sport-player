import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { MesaInterface } from 'src/app/interfaces/mesa-interface';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss'],
})
export class MesasComponent implements OnInit {
  code = new HttpUrlEncodingCodec();
  mesasData: MesaInterface[] = [
    {
      id: 1,
      name: 'Mesa 1',
      tableType: 'torneio',
      awardTotal: '1000',
      jackpot: null,
      buy: '1000',
      reBuy: false,
      playersDistribution: '1x1',
      AreSpectatorsAllowed: true,
      spectators: [],
      start_date: '2022-01-01T00:00:00.000Z',
      start_time: '2022-01-01T00:00:00.000Z',
      update_at: '2022-01-01T00:00:00.000Z',
      create_at: '2022-01-01T00:00:00.000Z',
      status: 'LIVRE',
      gameMode: 'limpo',
      rules: 'paulista',
    },
    {
      id: 1,
      name: 'Mesa 10',
      tableType: 'cashgame',
      awardTotal: '1000',
      jackpot: null,
      buy: '1000',
      reBuy: false,
      playersDistribution: '2x2',
      AreSpectatorsAllowed: true,
      spectators: [],
      start_date: '2022-01-01T00:00:00.000Z',
      start_time: '2022-01-01T00:00:00.000Z',
      update_at: '2022-01-01T00:00:00.000Z',
      create_at: '2022-01-01T00:00:00.000Z',
      status: 'LIVRE',
      gameMode: 'limpo',
      rules: 'paulista',
    },
    {
      id: 1,
      name: 'Mesa 10',
      tableType: 'cashgame',
      awardTotal: '1000',
      jackpot: null,
      buy: '1000',
      reBuy: false,
      playersDistribution: '1x1',
      AreSpectatorsAllowed: true,
      spectators: [],
      start_date: '2022-01-01T00:00:00.000Z',
      start_time: '2022-01-01T00:00:00.000Z',
      update_at: '2022-01-01T00:00:00.000Z',
      create_at: '2022-01-01T00:00:00.000Z',
      status: 'LIVRE',
      gameMode: 'limpo',
      rules: 'paulista',
    },
    {
      id: 1,
      name: 'Mesa 1',
      tableType: 'torneio',
      awardTotal: '100',
      jackpot: null,
      buy: '1000',
      reBuy: false,
      playersDistribution: '1x1',
      AreSpectatorsAllowed: true,
      spectators: [],
      start_date: '2022-01-01T00:00:00.000Z',
      start_time: '2022-01-01T00:00:00.000Z',
      update_at: '2022-01-01T00:00:00.000Z',
      create_at: '2022-01-01T00:00:00.000Z',
      status: 'LIVRE',
      gameMode: 'limpo',
      rules: 'mineiro',
    },
    {
      id: 1,
      name: 'Mesa 1',
      tableType: 'torneio',
      awardTotal: '1000',
      jackpot: null,
      buy: '100',
      reBuy: false,
      playersDistribution: '1x1',
      AreSpectatorsAllowed: true,
      spectators: [],
      start_date: '2022-01-01T00:00:00.000Z',
      start_time: '2022-01-01T00:00:00.000Z',
      update_at: '2022-01-01T00:00:00.000Z',
      create_at: '2022-01-01T00:00:00.000Z',
      status: 'OCUPADO',
      gameMode: 'limpo',
      rules: 'mineiro',
    },

    {
      id: 1,
      name: 'Mesa 1',
      tableType: 'cashgame',
      awardTotal: '1000',
      jackpot: null,
      buy: '100',
      reBuy: false,
      playersDistribution: '1x1',
      AreSpectatorsAllowed: true,
      spectators: [],
      start_date: '2022-01-01T00:00:00.000Z',
      start_time: '2022-01-01T00:00:00.000Z',
      update_at: '2022-01-01T00:00:00.000Z',
      create_at: '2022-01-01T00:00:00.000Z',
      status: 'LIVRE',
      gameMode: 'sujo',
      rules: 'paulista',
    },

    {
      id: 1,
      name: 'Mesa 1',
      tableType: 'cashgame',
      awardTotal: '1000',
      jackpot: null,
      buy: '100',
      reBuy: false,
      playersDistribution: '1x1',
      AreSpectatorsAllowed: true,
      spectators: [],
      start_date: '2022-01-01T00:00:00.000Z',
      start_time: '2022-01-01T00:00:00.000Z',
      update_at: '2022-01-01T00:00:00.000Z',
      create_at: '2022-01-01T00:00:00.000Z',
      status: 'LIVRE',
      gameMode: 'limpo',
      rules: 'mineiro',
    },
  ];

  constructor(private router: Router, private activateRouter: ActivatedRoute) {}

  navigateMatch(data: MesaInterface) {
    let url = data.tableType + data.playersDistribution;
    console.log(url);
  /*
      this.router.navigate([`/mesa`, { dados: JSON.stringify(data) }]);
 */
    //correnta
    this.router.navigate([`${url}`], {
      state: { data },
    });
  }

  ngOnInit() {}
}
