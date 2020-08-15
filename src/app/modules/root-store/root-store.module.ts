import { environment } from '../../../environments/environment';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersStoreModule } from './users-store/users-store.module';

@NgModule({
  imports: [UsersStoreModule],
  exports: [
    // UsersStoreModule
  ],
  declarations: [],
})
export class RootStoreModule {}
