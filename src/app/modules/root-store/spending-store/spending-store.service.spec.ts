import { TestBed } from '@angular/core/testing';

import { SpendingStoreService } from './spending-store.service';

describe('SpendingStoreService', () => {
  let service: SpendingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpendingStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
