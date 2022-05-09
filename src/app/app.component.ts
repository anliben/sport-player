import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private webSocketServices: WebSocketService,
    public translate: TranslateService
    ) { }
    
    ngOnInit(): void {
    this._initTranslate();

    this.webSocketServices
      .listen('Test event')
      .subscribe((data: any) => {
        console.log(data);
        
      }, (err) => console.log(err)
      )
      this.webSocketServices.emit('Test event', {data: 'ola'})
  }
  
  private _initTranslate(): void {
    if (this.translate.getBrowserLang() !== undefined) {
      let tr: any = this.translate.getBrowserLang()?.toString();
      this.translate.use(tr);
    } else {
      this.translate.use('pt');
    }
  }
}
