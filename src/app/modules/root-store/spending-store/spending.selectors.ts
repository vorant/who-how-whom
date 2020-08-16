import { createFeatureSelector, createSelector } from '@ngrx/store';
import { spendingFeatureKey, SpendingState } from './spending.reducer';

interface AppState {
  [spendingFeatureKey]: SpendingState;
}

export const selectSpendingState = createFeatureSelector<
  AppState,
  SpendingState
>(spendingFeatureKey);

export const selectAllSpending = createSelector(
  selectSpendingState,
  (state: SpendingState) => state
);

export const selectOneSpending = createSelector(
  selectAllSpending,
  (state, props) => state.entities.find((el) => el.id === props.id)
);
