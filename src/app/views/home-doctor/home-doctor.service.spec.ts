import { TestBed } from '@angular/core/testing';

import { HomeDoctorService } from './home-doctor.service';

describe('HomeDoctorService', () => {
  let service: HomeDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
