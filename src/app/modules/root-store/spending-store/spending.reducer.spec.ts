import { spendingReducer, initialState } from './spending.reducer';

describe('Spending Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = spendingReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});
