import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReporterComponent } from './home-reporter.component';

describe('HomeReporterComponent', () => {
  let component: HomeReporterComponent;
  let fixture: ComponentFixture<HomeReporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeReporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
