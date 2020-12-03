import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsTimeRangeComponent } from './measurements-time-range.component';

describe('MeasurementsTimeRangeComponent', () => {
  let component: MeasurementsTimeRangeComponent;
  let fixture: ComponentFixture<MeasurementsTimeRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementsTimeRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsTimeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
