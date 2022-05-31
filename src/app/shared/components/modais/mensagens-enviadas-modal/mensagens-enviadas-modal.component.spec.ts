import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MensagensEnviadasModalComponent } from './mensagens-enviadas-modal.component';

describe('MensagensEnviadasModalComponent', () => {
  let component: MensagensEnviadasModalComponent;
  let fixture: ComponentFixture<MensagensEnviadasModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensEnviadasModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MensagensEnviadasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
