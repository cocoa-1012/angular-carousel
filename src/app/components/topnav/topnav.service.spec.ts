import { TestBed } from '@angular/core/testing';

import { TopnavService } from './topnav.service';

describe('TopnavService', () => {
  let service: TopnavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopnavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
