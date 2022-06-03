import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmigosSolicilatoesComponent } from './amigos-solicilatoes.component';

describe('AmigosSolicilatoesComponent', () => {
  let component: AmigosSolicilatoesComponent;
  let fixture: ComponentFixture<AmigosSolicilatoesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmigosSolicilatoesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmigosSolicilatoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
