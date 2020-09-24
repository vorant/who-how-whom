import { TestBed, async } from '@angular/core/testing';

import { CoreService } from './core.service';
import { LocalStorageService } from '@core/services/local-storage.service';

describe('CoreService', () => {
  let service: CoreService;
  const localStorageService = {
    getSpending: jest.fn(() => {}),
    saveSpending: jest.fn(() => {}),
    getEvents: jest.fn(() => {}),
    saveEvents: jest.fn(() => {}),
    getUsers: jest.fn(() => {}),
    saveUsers: jest.fn(() => {}),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: LocalStorageService, useValue: localStorageService }],
    });
    service = TestBed.inject(CoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    service.getSpending();
    expect(localStorageService.getSpending).toHaveBeenCalled();
  });

  it('should call localStorageService.getSpending', () => {
    service.getSpending();
    expect(localStorageService.getSpending).toHaveBeenCalled();
  });
});
