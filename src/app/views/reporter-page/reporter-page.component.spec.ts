import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterPageComponent } from './reporter-page.component';

describe('ReporterPageComponent', () => {
  let component: ReporterPageComponent;
  let fixture: ComponentFixture<ReporterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
