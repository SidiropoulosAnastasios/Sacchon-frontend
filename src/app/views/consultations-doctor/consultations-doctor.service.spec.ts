import { TestBed } from '@angular/core/testing';

import { ConsultationsDoctorService } from './consultations-doctor.service';

describe('ConsultationsDoctorService', () => {
  let service: ConsultationsDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationsDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
