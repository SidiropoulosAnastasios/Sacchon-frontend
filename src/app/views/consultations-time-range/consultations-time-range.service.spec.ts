import { TestBed } from '@angular/core/testing';

import { ConsultationsTimeRangeService } from './consultations-time-range.service';

describe('ConsultationsTimeRangeService', () => {
  let service: ConsultationsTimeRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationsTimeRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
