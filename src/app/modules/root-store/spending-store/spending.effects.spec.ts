import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpendingEffects } from './spending.effects';

describe('SpendingEffects', () => {
  let actions$: Observable<any>;
  let effects: SpendingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpendingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SpendingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
