import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '@shared/models/user.model';
import { defaultDataServiceConfig, UserStoreVariable } from './user-metadata';
import { delay, map, tap } from 'rxjs/operators';
import { LocalStorageService } from '@core/services/local-storage.service';

@Injectable()
export class UsersDataService extends DefaultDataService<UserModel> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private localStorageService: LocalStorageService
  ) {
    super(UserStoreVariable, http, httpUrlGenerator, defaultDataServiceConfig);
  }

  getAll(): Observable<UserModel[]> {
    return this.localStorageService.getUsers().pipe(delay(1000));
  }

  add(entity: UserModel): Observable<UserModel> {
    return this.localStorageService.getUsers().pipe(
      tap((users) => {
        users.push(entity);
        this.localStorageService.saveUsers(users);
      }),
      map(() => entity),
      delay(1000)
    );
  }

  delete(key: number | string): Observable<number | string> {
    return this.localStorageService.getUsers().pipe(
      tap((users) => {
        users = users.filter((entity) => entity.id !== key);
        this.localStorageService.saveUsers(users);
      }),
      map(() => key),
      delay(1000)
    );
  }

  upsert(entity: UserModel): Observable<UserModel> {
    return this.localStorageService.getUsers().pipe(
      tap((users) => {
        if (users.some((el) => el.id === entity.id)) {
          users = users.map((el) => (el.id === entity.id ? entity : el));
        } else {
          users.push(entity);
        }

        this.localStorageService.saveUsers(users);
      }),
      map(() => entity),
      delay(1000)
    );
  }
}
