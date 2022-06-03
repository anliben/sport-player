import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  player;

  constructor() { }

  setPlayer(player): Promise<void>{
    return new Promise<void>((resolve, reject) => {
      resolve(
        this.player = player
      );
    });
  }

  getPlayer(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      resolve(this.player);
    });
  }

  setItem(key: string, value: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      localStorage.setItem(key, JSON.stringify(value))
      resolve();
    });
  }

  getItem(key: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const value = localStorage.getItem(key);
      resolve(JSON.parse(value));
    });
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
