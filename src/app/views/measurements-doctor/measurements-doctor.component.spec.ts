import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsDoctorComponent } from './measurements-doctor.component';

describe('MeasurementsDoctorComponent', () => {
  let component: MeasurementsDoctorComponent;
  let fixture: ComponentFixture<MeasurementsDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementsDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
