import { TestBed } from '@angular/core/testing';

import { DoctorsNoActivityService } from './doctors-no-activity.service';

describe('DoctorsNoActivityService', () => {
  let service: DoctorsNoActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsNoActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
