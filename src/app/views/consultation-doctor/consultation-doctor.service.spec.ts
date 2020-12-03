import { TestBed } from '@angular/core/testing';

import { ConsultationDoctorService } from './consultation-doctor.service';

describe('ConsultationDoctorService', () => {
  let service: ConsultationDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultationDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
