import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {UsersComponent} from "./users/users.component";

import {EventComponent} from "./event/event.component";
import {SpendingComponent} from "./spending/spending.component";


const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'event/:eventId',
    component: EventComponent,
  },
  {
    path: 'event/:eventId/spending',
    component: SpendingComponent
  },
  {
    path: 'event/:eventId/spending/:spendingId',
    component: SpendingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
