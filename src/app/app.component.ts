import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private webSocketServices: WebSocketService
    ) { }

  ngOnInit(): void {
    this.webSocketServices
      .listen('Test event')
      .subscribe((data: any) => {
        console.log(data);
        
      }, (err) => console.log(err)
      )
      this.webSocketServices.emit('Test event', {data: 'ola'})
  }
}
