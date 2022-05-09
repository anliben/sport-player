import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  storeItens: any [] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
     this.httpClient.get(`http://localhost:3000/dataStoreItem`).subscribe((res:any)=>{
      this.storeItens = res.items;
      console.log(this.storeItens); 
      
    })
  }
 
}
