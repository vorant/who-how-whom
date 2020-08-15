import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../../../environments/environment';

export const UserStoreVariable = 'User';
export const entityMetadata: EntityMetadataMap = {
  [UserStoreVariable]: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      optimisticAdd: true,
    }
  },
};

export const pluralNames = {
  User: 'usersss',
};

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.baseUrl,
  timeout: 9000, // request timeout
};
