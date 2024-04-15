import { TestBed } from '@angular/core/testing';

import { InjectibleserviceService } from './injectibleservice.service';

describe('InjectibleserviceService', () => {
  let service: InjectibleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectibleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
