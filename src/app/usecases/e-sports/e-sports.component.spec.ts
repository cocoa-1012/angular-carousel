import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ESportsComponent } from './e-sports.component';

describe('ESportsComponent', () => {
  let component: ESportsComponent;
  let fixture: ComponentFixture<ESportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ESportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
