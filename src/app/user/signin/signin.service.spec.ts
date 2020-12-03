import { TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';

import { SigninService } from './signin.service';

describe('SigninService', () => {
  let component: SigninComponent;
  let service: SigninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
