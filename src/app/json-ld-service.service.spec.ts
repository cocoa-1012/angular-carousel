import { TestBed } from '@angular/core/testing';

import { JsonLdServiceService } from './json-ld-service.service';

describe('JsonLdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonLdServiceService = TestBed.get(JsonLdServiceService);
    expect(service).toBeTruthy();
  });
});
