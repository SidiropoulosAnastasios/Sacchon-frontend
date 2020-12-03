import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsNoActivityComponent } from './doctors-no-activity.component';

describe('DoctorsNoActivityComponent', () => {
  let component: DoctorsNoActivityComponent;
  let fixture: ComponentFixture<DoctorsNoActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsNoActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsNoActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
