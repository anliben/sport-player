export interface MesaInterface {
    id: 1;
    name: string;
    tableType: string;
    awardTotal: string | number;
    jackpot: string | number;
    buy: string | number;
    reBuy: false;
    playersDistribution: string;
    AreSpectatorsAllowed: boolean;
    spectators: any;
    start_date: string;
    start_time: string;
    update_at: string;
    create_at: string;
    status: string;
    gameMode: string;
    rules: string;
}
