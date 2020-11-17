import { TestBed } from '@angular/core/testing';

import { EnvAuthService } from './env.service';

describe('EnvService', () => {
  let service: EnvAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
