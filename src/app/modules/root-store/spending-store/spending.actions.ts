import { createAction, props } from '@ngrx/store';
import { SpendingState } from './spending.reducer';
import { SpendingModel } from '@shared/models/spending.model';

export const loadSpending = createAction('[Spending] Load Spending');

export const loadSpendingSuccess = createAction(
  '[Spending] Load Spending Success',
  props<{ entities: SpendingModel[] }>()
);

export const loadSpendingFailure = createAction(
  '[Spending] Load Spending Failure',
  props<{ error: any }>()
);

export const addSpendingItem = createAction(
  '[Spending] Add Spending Item',
  props<{ spendingItem: SpendingModel }>()
);

export const addSpendingItemSuccess = createAction(
  '[Spending] Add Spending Item Success'
);

export const addSpendingItemFailure = createAction(
  '[Spending] Add Spending Item Failure',
  props<{ error: any }>()
);

export const deleteSpendingItem = createAction(
  '[Spending] Delete Spending Item',
  props<{ id: string }>()
);

export const deleteSpendingItemSuccess = createAction(
  '[Spending] Delete Spending Item Success'
);

export const deleteSpendingItemFailure = createAction(
  '[Spending] Delete Spending Item Failure',
  props<{ error: any }>()
);

export const getSpendingItem = createAction(
  '[Spending] Get Spending Item',
  props<{ id: string }>()
);

export const editSpendingItem = createAction(
  '[Spending] Edit Spending Item',
  props<{ spendingItem: SpendingModel }>()
);

export const editSpendingItemSuccess = createAction(
  '[Spending] Edit Spending Item Success'
);
