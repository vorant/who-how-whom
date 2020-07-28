import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsComponent} from './events/events.component';
import {EventComponent} from './event/event.component';
import {AddNewUserComponent} from './add-new-user/add-new-user.component';
import {SpendingComponent} from './spending/spending.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [EventsComponent, EventComponent, AddNewUserComponent, SpendingComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
