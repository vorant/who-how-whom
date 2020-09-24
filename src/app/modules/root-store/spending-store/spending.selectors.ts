import { createFeatureSelector, createSelector } from '@ngrx/store';
import { spendingFeatureKey, SpendingState } from './spending.reducer';
import { EventModel } from '@shared/models/event.model';

interface AppState {
  [spendingFeatureKey]: SpendingState;
}

export const selectSpendingState = createFeatureSelector<AppState, SpendingState>(
  spendingFeatureKey,
);

export const selectAllSpending = createSelector(
  selectSpendingState,
  (state: SpendingState) => state,
);

export const selectOneSpending = createSelector(selectAllSpending, (state, props) =>
  state.entities.find((el) => el.id === props.id),
);

export const selectSpendingByEvent = createSelector(
  selectAllSpending,
  (state, props: { eventId: string }) => ({
    ...state,
    entities: state.entities.filter((el) => el.eventId === props.eventId),
  }),
);
