import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players = [];

  url: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.url = environment.api
  }

  getAllPlayer(): Observable<Object>{
    return this.httpClient.get(this.url + '/player/getAllPlayers')
  }

  getOnePlayer(id): Observable<Object>{
    return this.httpClient.get(this.url + '/player/getOnePlayer', {
      params: {
        id: id
      }
    })
  }

  requestFriend(id, id_friend): Observable<Object> {
    return this.httpClient.post(this.url + '/player/requestFriend', {
      id: id,
      friend_id: id_friend
    })
  }

  deleteFriend(id, id_friend): Observable<Object> {
    return this.httpClient.post(this.url + '/player/deleteFriend', {
      id: id,
      friend_id: id_friend
    })
  }
  acceptFriend(id, id_friend): Observable<Object> {
    return this.httpClient.post(this.url + '/player/acceptFriend', {
      id: id,
      friend_id: id_friend
    })
  }
  
}
