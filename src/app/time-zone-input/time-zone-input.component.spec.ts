import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneInputComponent } from './time-zone-input.component';

describe('TimeZoneInputComponent', () => {
  let component: TimeZoneInputComponent;
  let fixture: ComponentFixture<TimeZoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeZoneInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeZoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
