import { createReducer, on } from '@ngrx/store';
import { SpendingModel } from '@shared/models/spending.model';
import * as spendingActions from './spending.actions';

export const spendingFeatureKey = 'spending';

export interface SpendingState {
  loading: boolean;
  loaded: boolean;
  entities: SpendingModel[];
}

export const initialState: SpendingState = {
  loading: false,
  loaded: false,
  entities: [],
};

export const spendingReducer = createReducer(
  initialState,
  on(spendingActions.loadSpending, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(spendingActions.loadSpendingSuccess, (state, action) => {
    return {
      // ...state,
      entities: action.entities,
      loaded: true,
      loading: false,
    };
  }),
  on(spendingActions.addSpendingItem, (state, action) => {
    return {
      ...state,
      entities: [...state.entities, action.spendingItem],
    };
  }),
  on(spendingActions.deleteSpendingItem, (state, action) => {
    return {
      ...state,
      entities: state.entities.filter((el) => el.id !== action.id),
    };
  }),

  on(spendingActions.editSpendingItem, (state, action) => {
    return {
      ...state,
      entities: state.entities.map((el) =>
        el.id === action.spendingItem.id ? action.spendingItem : el
      ),
    };
  })
);
