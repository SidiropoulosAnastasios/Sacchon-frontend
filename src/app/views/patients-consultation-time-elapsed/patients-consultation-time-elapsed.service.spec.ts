import { TestBed } from '@angular/core/testing';

import { PatientsConsultationTimeElapsedService } from './patients-consultation-time-elapsed.service';

describe('PatientsConsultationTimeElapsedService', () => {
  let service: PatientsConsultationTimeElapsedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsConsultationTimeElapsedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
