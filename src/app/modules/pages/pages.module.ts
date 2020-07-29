import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsComponent} from './events/events.component';
import {EventComponent} from './event/event.component';
import {SpendingComponent} from './spending/spending.component';
import {PagesRoutingModule} from "./pages-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {UsersComponent} from './users/users.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [EventsComponent, EventComponent, SpendingComponent, UsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule {
}
