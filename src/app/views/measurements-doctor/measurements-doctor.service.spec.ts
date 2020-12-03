import { TestBed } from '@angular/core/testing';

import { MeasurementsDoctorService } from './measurements-doctor.service';

describe('MeasurementsDoctorService', () => {
  let service: MeasurementsDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeasurementsDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
