import { TestBed } from '@angular/core/testing';

import { AmigosModalService } from './amigos-modal.service';

describe('AmigosModalService', () => {
  let service: AmigosModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmigosModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
