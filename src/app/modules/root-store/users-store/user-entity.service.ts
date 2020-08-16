import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { UserModel } from '@shared/models/user.model';
import { UserStoreVariable } from './user-metadata';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserEntityService extends EntityCollectionServiceBase<UserModel> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(UserStoreVariable, serviceElementsFactory);
  }

  getEntities(): Observable<UserModel[]> {
    return combineLatest([this.loaded$, this.loading$, this.entities$]).pipe(
      tap(([loaded, loading]) => {
        if (!loaded && !loading) {
          this.getAll();
        }
      }),
      map(([loaded, loading, entities]) => entities)
    );
  }
}
