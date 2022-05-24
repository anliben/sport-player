import { TestBed } from '@angular/core/testing';

import { CashgameServicesService } from './cashgame-services.service';

describe('CashgameServicesService', () => {
  let service: CashgameServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashgameServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
