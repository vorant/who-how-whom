import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as spendingActions from './spending.actions';
import { catchError, delay, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SpendingModel } from '@shared/models/spending.model';
import { LocalStorageService } from '@core/services/local-storage.service';

@Injectable()
export class SpendingEffects {
  loadSpending$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(spendingActions.loadSpending),
        mergeMap(() => this.localStorageService.getSpending()),
        delay(1000),
        map((spending: SpendingModel[]) =>
          spendingActions.loadSpendingSuccess({ entities: spending })
        ),
        catchError((error: any) => {
          return of(spendingActions.loadSpendingFailure({ error }));
        })
      )
    // { dispatch: false }
  );

  addSpendingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(spendingActions.addSpendingItem),
      mergeMap((data) => {
        return this.localStorageService.getSpending().pipe(
          tap((spending) => {
            spending.push(data.spendingItem);
            this.localStorageService.saveSpending(spending);
          })
        );
      }),
      map(() => spendingActions.addSpendingItemSuccess())
    )
  );

  deleteSpendingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(spendingActions.deleteSpendingItem),
      mergeMap((data) => {
        return this.localStorageService.getSpending().pipe(
          tap((spending) => {
            spending = spending.filter((el) => el.id !== data.id);
            this.localStorageService.saveSpending(spending);
          })
        );
      }),
      map(() => spendingActions.deleteSpendingItemSuccess())
    )
  );

  editSpendingItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(spendingActions.editSpendingItem),
      mergeMap((data) => {
        return this.localStorageService.getSpending().pipe(
          tap((spending) => {
            this.localStorageService.saveSpending(
              spending.map((el) =>
                el.id === data.spendingItem.id ? data.spendingItem : el
              )
            );
          })
        );
      }),
      map(() => spendingActions.editSpendingItemSuccess())
    )
  );

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService
  ) {}
}
