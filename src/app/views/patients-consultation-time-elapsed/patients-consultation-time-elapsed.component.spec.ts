import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsConsultationTimeElapsedComponent } from './patients-consultation-time-elapsed.component';

describe('PatientsConsultationTimeElapsedComponent', () => {
  let component: PatientsConsultationTimeElapsedComponent;
  let fixture: ComponentFixture<PatientsConsultationTimeElapsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsConsultationTimeElapsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsConsultationTimeElapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
