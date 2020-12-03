import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationDoctorComponent } from './consultation-doctor.component';

describe('ConsultationDoctorComponent', () => {
  let component: ConsultationDoctorComponent;
  let fixture: ComponentFixture<ConsultationDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
