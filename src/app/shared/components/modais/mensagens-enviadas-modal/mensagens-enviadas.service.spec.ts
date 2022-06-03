import { TestBed } from '@angular/core/testing';

import { MensagensEnviadasService } from './mensagens-enviadas.service';

describe('MensagensEnviadasService', () => {
  let service: MensagensEnviadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagensEnviadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
