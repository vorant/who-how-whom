import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { spendingFeatureKey, spendingReducer } from './spending.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SpendingEffects } from './spending.effects';
import { SpendingStoreService } from './spending-store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(spendingFeatureKey, spendingReducer),
    EffectsModule.forFeature([SpendingEffects]),
  ],
  providers: [SpendingStoreService],
})
export class SpendingStoreModule {}
