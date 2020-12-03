import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsNoActivityComponent } from './patients-no-activity.component';

describe('PatientsNoActivityComponent', () => {
  let component: PatientsNoActivityComponent;
  let fixture: ComponentFixture<PatientsNoActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsNoActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsNoActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
