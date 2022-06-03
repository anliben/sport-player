import { TestBed } from '@angular/core/testing';

import { MessagensRecebidasService } from './messagens-recebidas.service';

describe('MessagensRecebidasService', () => {
  let service: MessagensRecebidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagensRecebidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
