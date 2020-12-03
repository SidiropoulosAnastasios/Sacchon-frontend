import { TestBed } from '@angular/core/testing';

import { MeasurementsTimeRangeService } from './measurements-time-range.service';

describe('MeasurementsTimeRangeService', () => {
  let service: MeasurementsTimeRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasurementsTimeRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
