import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalhesJogoCashgameModalComponent } from './detalhes-jogo-cashgame-modal.component';

describe('DetalhesJogoCashgameModalComponent', () => {
  let component: DetalhesJogoCashgameModalComponent;
  let fixture: ComponentFixture<DetalhesJogoCashgameModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesJogoCashgameModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesJogoCashgameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
