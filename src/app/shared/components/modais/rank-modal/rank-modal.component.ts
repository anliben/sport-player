import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RankService } from './rank.service';

@Component({
  selector: 'app-rank-modal',
  templateUrl: './rank-modal.component.html',
  styleUrls: ['./rank-modal.component.scss'],
})
export class RankModalComponent implements OnInit {

  seasonDate:any[] = [];
  rankPlayers:any[] = [];

  constructor(private modalController: ModalController, private rankService: RankService ) { }

  ngOnInit() {
    this.rankService.getRankPlayers().subscribe((res)=>{
      this.rankPlayers = res[0].ranks;
      console.log(res[0].season);
    })
    this.rankService.getSeason().subscribe((res)=>{
      this.seasonDate = res;
      console.log(this.seasonDate);
    })
  }

  back(){
    this.modalController.dismiss();
  }

}
