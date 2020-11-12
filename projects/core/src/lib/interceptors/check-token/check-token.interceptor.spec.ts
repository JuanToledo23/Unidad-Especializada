import { TestBed } from '@angular/core/testing';

import { CheckTokenInterceptor } from './check-token.inteceptor';

describe('CheckTokenService', () => {
  let service: CheckTokenInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckTokenInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
