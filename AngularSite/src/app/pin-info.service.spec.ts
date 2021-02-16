import { TestBed } from '@angular/core/testing';

import { PinInfoService } from './pin-info.service';

describe('PinInfoService', () => {
  let service: PinInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
