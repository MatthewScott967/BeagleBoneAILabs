import { TestBed } from '@angular/core/testing';

import { PinInfoQueryService } from './pin-info-query.service';

describe('PinInfoQueryService', () => {
  let service: PinInfoQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinInfoQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
