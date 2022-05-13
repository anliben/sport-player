import { TestBed } from '@angular/core/testing';

import { PlayerIdService } from './player-id.service';

describe('PlayerIdService', () => {
  let service: PlayerIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
