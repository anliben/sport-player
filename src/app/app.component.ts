import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    public translate: TranslateService
    ) { }

    ngOnInit(): void {
    this.initTranslate();
  }

  private initTranslate(): void {
    if (this.translate.getBrowserLang() !== undefined) {
      const tr: any = this.translate.getBrowserLang()?.toString();
      this.translate.use(tr);
    } else {
      this.translate.use('pt');
    }
  }
}
