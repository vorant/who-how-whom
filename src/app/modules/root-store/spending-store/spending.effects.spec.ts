import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { SpendingEffects } from './spending.effects';
import { LocalStorageService } from '@core/services/local-storage.service';
import { TestScheduler } from 'rxjs/testing';
import { Actions } from '@ngrx/effects';
import { SpendingModel } from '@shared/models/spending.model';

describe('SpendingEffects', () => {
  let actions$ = new Observable<any>();
  let effects: SpendingEffects;
  let testScheduler: TestScheduler;
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpendingEffects, provideMockActions(() => actions$), LocalStorageService],
    });

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    actions$ = TestBed.inject(Actions);
    effects = TestBed.inject(SpendingEffects);
    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should throw action `loadSpendingSuccess`', () => {
    const spendings = [{}, {}, {}] as SpendingModel[];
    const spyGetSpending = jest
      .spyOn(localStorageService, 'getSpending')
      .mockReturnValue(of(spendings));

    testScheduler.run(({ hot, expectObservable }) => {
      const actionReturn = {
        type: '[Spending] Load Spending Success',
        entities: spendings,
      };

      actions$ = hot('--a', { a: { type: '[Spending] Load Spending' } });

      expectObservable(effects.loadSpending$).toBe('-- 1s c', {
        c: actionReturn,
      });
    });

    expect(spyGetSpending).toHaveBeenCalled();
    expect(localStorageService.getSpending).toHaveBeenCalled();
  });
});
