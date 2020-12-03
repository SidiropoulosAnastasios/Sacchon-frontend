import { TestBed } from '@angular/core/testing';

import { HomeReporterService } from './home-reporter.service';

describe('HomeReporterService', () => {
  let service: HomeReporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeReporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
