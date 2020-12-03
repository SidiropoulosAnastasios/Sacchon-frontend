import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsTimeRangeComponent } from './consultations-time-range.component';

describe('ConsultationsTimeRangeComponent', () => {
  let component: ConsultationsTimeRangeComponent;
  let fixture: ComponentFixture<ConsultationsTimeRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationsTimeRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsTimeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
