import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersStoreModule } from './users-store/users-store.module';
import { SpendingStoreModule } from './spending-store/spending-store.module';

@NgModule({
  imports: [UsersStoreModule, SpendingStoreModule],
  exports: [
    // UsersStoreModule
  ],
  declarations: [],
})
export class RootStoreModule {}
