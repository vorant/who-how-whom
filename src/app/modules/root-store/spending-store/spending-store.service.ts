import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpendingModel } from '@shared/models/spending.model';
import { select, Store } from '@ngrx/store';
import { selectAllSpending, selectOneSpending } from './spending.selectors';
import { map, tap } from 'rxjs/operators';
import * as SpendingActions from './spending.actions';

@Injectable()
export class SpendingStoreService {
  constructor(private store: Store) {}

  getSpending(): Observable<SpendingModel[]> {
    return this.store.pipe(
      select(selectAllSpending),
      tap((state) => {
        if (!state.loaded && !state.loading) {
          this.store.dispatch(SpendingActions.loadSpending());
        }
      }),
      map((state) => state.entities)
    );
  }

  addSpendingItem(spendingItem: SpendingModel) {
    this.store.dispatch(SpendingActions.addSpendingItem({ spendingItem }));
  }

  deleteSpendingItem(id: string) {
    this.store.dispatch(SpendingActions.deleteSpendingItem({ id }));
  }

  getSendingItem(id: string): Observable<SpendingModel> {
    return this.store.pipe(select(selectOneSpending, { id }));
  }

  editSpendingItem(spendingItem: SpendingModel) {
    this.store.dispatch(SpendingActions.editSpendingItem({ spendingItem }));
  }
}
