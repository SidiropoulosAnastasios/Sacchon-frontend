import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsDoctorComponent } from './consultations-doctor.component';

describe('ConsultationsDoctorComponent', () => {
  let component: ConsultationsDoctorComponent;
  let fixture: ComponentFixture<ConsultationsDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationsDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
