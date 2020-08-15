import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { UserModel } from '@shared/models/user.model';
import { UserStoreVariable } from './user-metadata';

@Injectable()
export class UserEntityService extends EntityCollectionServiceBase<UserModel> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(UserStoreVariable, serviceElementsFactory);
  }
}
