import { spendingReducer, initialState, SpendingState } from './spending.reducer';
import * as spendingActions from './spending.actions';
import { SpendingModel } from '@shared/models/spending.model';

describe('Spending Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const state = spendingReducer(initialState, action);
      expect(state).toBe(initialState);
    });

    it('should set `loading` to true', () => {
      const action = spendingActions.loadSpending();
      const state = spendingReducer(initialState, action);
      expect(state.loading).toBeTruthy();
    });

    it('should return positive state', () => {
      const action = spendingActions.loadSpendingSuccess({ entities: [] });
      const state = spendingReducer(initialState, action);
      expect(state.entities.length).toEqual(0);
      expect(state.loaded).toBeTruthy();
      expect(state.loading).toBeFalsy();
    });

    it('should remove entity', () => {
      const action = spendingActions.deleteSpendingItem({ id: '1' });
      const entities = [{ id: '1' }, { id: '2' }, { id: '3' }] as SpendingModel[];
      const initState = {
        entities,
      } as SpendingState;
      const state = spendingReducer(initState, action);
      expect(state.entities.length).toEqual(2);
    });
  });
});
