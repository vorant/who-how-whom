import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as spendingActions from './spending.actions';
import { catchError, delay, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SpendingModel } from '@shared/models/spending.model';

@Injectable()
export class SpendingEffects {
  loadSpending$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(spendingActions.loadSpending),
        mergeMap(() => {
          // get data
          return of([]); // demoData
        }),
        delay(1000),
        map((spending: SpendingModel[]) =>
          spendingActions.loadSpendingSuccess({ entities: spending })
        )
        // catchError((error) => spendingActions.loadSpendingFailure({ error }))
      )
    // { dispatch: false }
  );

  addSpendingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(spendingActions.addSpendingItem),
      mergeMap((spendingItem) => {
        // save data
        return of(spendingItem);
      }),
      map(() => spendingActions.addSpendingItemSuccess())
    )
  );

  deleteSpendingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(spendingActions.deleteSpendingItem),
      mergeMap((id) => {
        // delete data
        return of(true);
      }),
      map(() => spendingActions.deleteSpendingItemSuccess())
    )
  );

  editSpendingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(spendingActions.editSpendingItem),
      mergeMap((spendingItem) => {
        // edit data
        return of(spendingItem);
      }),
      map(() => spendingActions.editSpendingItemSuccess())
    )
  );

  constructor(private actions$: Actions) {}
}
