import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players = [];
  constructor(
    private db: AngularFireDatabase,
  ) { }

  getPlayer() {
    let player = [];
    return new Observable((subscriber) => {
      this.db.list('/player').snapshotChanges().forEach(snapshot => {
        player = snapshot.map(c => ({ key: c.payload.key, ...c.payload.toJSON() }));
      });
      this.players = player;
      subscriber.next(player);
    });
  }
  getOnePlayer(key: string) {
    this.db.object('/player/' + key).snapshotChanges().forEach(snapshot => {
    });
  }

  getToken() {

  }

}
