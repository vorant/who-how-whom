import * as fromSpending from './spending.actions';

describe('loadSpendings', () => {
  it('should return an action', () => {
    expect(fromSpending.loadSpendings().type).toBe('[Spending] Load Spendings');
  });
});
