import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEmailComponent } from './inline-email.component';

describe('InlineEmailComponent', () => {
  let component: InlineEmailComponent;
  let fixture: ComponentFixture<InlineEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
