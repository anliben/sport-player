import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensagensRecebidasModalComponent } from './mensagens-recebidas-modal.component';

describe('MensagensRecebidasModalComponent', () => {
  let component: MensagensRecebidasModalComponent;
  let fixture: ComponentFixture<MensagensRecebidasModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensRecebidasModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensagensRecebidasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
