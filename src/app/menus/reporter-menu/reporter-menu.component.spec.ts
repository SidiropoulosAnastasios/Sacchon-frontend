import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporterMenuComponent } from './reporter-menu.component';

describe('ReporterMenuComponent', () => {
  let component: ReporterMenuComponent;
  let fixture: ComponentFixture<ReporterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
