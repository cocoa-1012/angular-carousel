import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseCheckComponent } from './firebase-check.component';

describe('FirebaseCheckComponent', () => {
  let component: FirebaseCheckComponent;
  let fixture: ComponentFixture<FirebaseCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
