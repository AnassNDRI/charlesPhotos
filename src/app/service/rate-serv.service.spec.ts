import { TestBed } from '@angular/core/testing';

import { RateServService } from './rate-serv.service';

describe('RateServService', () => {
  let service: RateServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RateServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
