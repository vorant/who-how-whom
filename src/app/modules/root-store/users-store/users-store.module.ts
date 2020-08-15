import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  entityMetadata,
  pluralNames,
  UserStoreVariable,
} from './user-metadata';
import {
  EntityDataService,
  EntityDefinitionService,
  PLURAL_NAMES_TOKEN,
} from '@ngrx/data';
import { UserEntityService } from './user-entity.service';
import { UsersDataService } from './user-data.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: PLURAL_NAMES_TOKEN, multi: true, useValue: pluralNames },
    UserEntityService,
    UsersDataService,
  ],
})
export class UsersStoreModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private userDataService: UsersDataService
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService(UserStoreVariable, userDataService);
  }
}
