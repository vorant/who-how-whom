import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreService} from "./services/core.service";
import {LocalStorageService} from "./services/local-storage.service";


@NgModule({
  declarations: [],
  // providers: [CoreService, LocalStorageService],
  imports: [
    CommonModule
  ],
  exports: []
})
export class CoreModule {
}
