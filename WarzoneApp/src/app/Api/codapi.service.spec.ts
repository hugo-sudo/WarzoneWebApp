import { TestBed } from '@angular/core/testing';

import { CodapiService } from './codapi.service';

describe('CodapiService', () => {
  let service: CodapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
