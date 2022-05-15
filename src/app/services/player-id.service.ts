import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerIdService {
  
  id: string;
  nome: string;
  manilha: string;
  constructor() { }
  setId(id: string){
    this.id = id;
    localStorage.setItem('id', id);
  }
  getId(){ return this.id }
  setNome( nome: string ){ this.nome = nome }
  getNome(){ return this.nome }
  setManilha( manilha: any ){ this.manilha = manilha; }
  getManilha(){ return this.manilha; }
}
