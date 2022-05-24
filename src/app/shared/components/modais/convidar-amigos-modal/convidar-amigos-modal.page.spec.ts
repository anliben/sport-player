import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvidarAmigosModalPage } from './convidar-amigos-modal.page';

describe('ConvidarAmigosModalPage', () => {
  let component: ConvidarAmigosModalPage;
  let fixture: ComponentFixture<ConvidarAmigosModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvidarAmigosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvidarAmigosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
