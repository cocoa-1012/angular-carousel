import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerPageComponent } from './organizer-page.component';

describe('OrganizerPageComponent', () => {
  let component: OrganizerPageComponent;
  let fixture: ComponentFixture<OrganizerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
