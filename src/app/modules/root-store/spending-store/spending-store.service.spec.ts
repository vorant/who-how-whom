import { TestBed } from '@angular/core/testing';

import { SpendingStoreService } from './spending-store.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('SpendingStoreService', () => {
  let service: SpendingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({})],
    });
    service = TestBed.inject(SpendingStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
