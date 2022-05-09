import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this._initTranslate()
  }

  changeScreen(screen: any){
    this.router.navigate([screen])
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
