import { TestBed } from '@angular/core/testing';

import { OfficePoolCarService } from './office-pool-car.service';

describe('OfficePoolCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficePoolCarService = TestBed.get(OfficePoolCarService);
    expect(service).toBeTruthy();
  });
});
