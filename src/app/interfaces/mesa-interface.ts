export interface MesaInterface {
  id: 1;
  name: string;
  tableType: string;
  awardTotal: string | number;
  jackpot: string | number;
  buy: string | number;
  reBuy: false;
  playersDistribution: string;
  areSpectatorsAllowed: boolean;
  spectators: any;
  startDate: string;
  startTime: string;
  updateAt: string;
  createAt: string;
  status: string;
  gameMode: string;
  rules: string;
}
