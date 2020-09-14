import * as fromSpending from './spending.actions';

describe('loadSpendings', () => {
  it('should return an action', () => {
    expect(fromSpending.loadSpending().type).toBe('[Spending] Load Spending');
  });
});
