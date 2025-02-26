import { TestBed } from '@angular/core/testing';

import { ApiHttpsService } from './api-https.service';

describe('ApiHttpsService', () => {
  let service: ApiHttpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHttpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
