import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracaoJogoModalComponent } from './configuracao-jogo-modal.component';

describe('ConfiguracaoJogoModalComponent', () => {
  let component: ConfiguracaoJogoModalComponent;
  let fixture: ComponentFixture<ConfiguracaoJogoModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoJogoModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracaoJogoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
