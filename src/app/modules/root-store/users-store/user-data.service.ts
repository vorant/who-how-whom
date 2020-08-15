import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserModel } from '@shared/models/user.model';
import { defaultDataServiceConfig, UserStoreVariable } from './user-metadata';

@Injectable()
export class UsersDataService extends DefaultDataService<UserModel> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super(UserStoreVariable, http, httpUrlGenerator, defaultDataServiceConfig);
  }

  getAll(): Observable<UserModel[]> {
    return of([{ id: '1', name: 'Seric' }]);
    // return super.getAll();
  }
}
