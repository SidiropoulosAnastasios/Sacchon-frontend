import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsWaitingConsultationComponent } from './patients-waiting-consultation.component';

describe('PatientsWaitingConsultationComponent', () => {
  let component: PatientsWaitingConsultationComponent;
  let fixture: ComponentFixture<PatientsWaitingConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsWaitingConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsWaitingConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
