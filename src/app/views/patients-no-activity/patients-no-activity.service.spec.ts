import { TestBed } from '@angular/core/testing';

import { PatientsNoActivityService } from './patients-no-activity.service';

describe('PatientsNoActivityService', () => {
  let service: PatientsNoActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsNoActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
