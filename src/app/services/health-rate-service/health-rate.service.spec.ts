import { TestBed } from '@angular/core/testing';

import { HealthRateService } from './health-rate.service';

describe('HealthRateService', () => {
  let service: HealthRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
