import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterMesaTrucoComponent } from './footer-mesa-truco.component';

describe('FooterMesaTrucoComponent', () => {
  let component: FooterMesaTrucoComponent;
  let fixture: ComponentFixture<FooterMesaTrucoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMesaTrucoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterMesaTrucoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
