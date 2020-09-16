import { TestBed } from '@angular/core/testing';

import { ResultsService } from './results.service';
import { spending, userA, userB, userC } from '@core/services/results.mock';

describe('ResultsService', () => {
  let service: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 0, as no spending', () => {
    // service.getResults([spending1, spending2, spending3]);
    const result = service.getResults([]);

    expect(result).toEqual([]);
  });

  it('should return 0, as one user spend all for himself', () => {
    const result = service.getResults([spending.spending4, spending.spending5]);

    expect([]).toEqual(result);
  });

  it('UserB and UserC should get back by 300 to UserA', () => {
    const expected = [
      {
        who: userB,
        how: 300,
        whom: userA,
      },
      {
        who: userC,
        how: 300,
        whom: userA,
      },
    ];

    expect(expected).toEqual(service.getResults([spending.spending1]));
  });

  it('UserB owns to UserA 100, UserC owns to UserA 200, UserC owns to UserB 100', () => {
    const expected = [
      {
        who: userB,
        how: 100,
        whom: userA,
      },
      {
        who: userC,
        how: 200,
        whom: userA,
      },
      {
        who: userC,
        how: 100,
        whom: userB,
      },
    ];

    const result = service.getResults([
      spending.spending1,
      spending.spending2,
      spending.spending3,
    ]);

    expect(expected).toEqual(result);
  });
});
