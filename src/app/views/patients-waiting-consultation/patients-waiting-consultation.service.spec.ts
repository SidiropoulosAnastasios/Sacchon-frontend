import { TestBed } from '@angular/core/testing';

import { PatientsWaitingConsultationService } from './patients-waiting-consultation.service';

describe('PatientsWaitingConsultationService', () => {
  let service: PatientsWaitingConsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsWaitingConsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
