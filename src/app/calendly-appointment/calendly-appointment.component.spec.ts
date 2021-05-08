import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendlyAppointmentComponent } from './calendly-appointment.component';

describe('CalendlyAppointmentComponent', () => {
  let component: CalendlyAppointmentComponent;
  let fixture: ComponentFixture<CalendlyAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendlyAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendlyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
