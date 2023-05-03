import { TestBed } from '@angular/core/testing';

import { ServicesSaveUserService } from './services-save-user.service';

describe('ServicesSaveUserService', () => {
  let service: ServicesSaveUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesSaveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
