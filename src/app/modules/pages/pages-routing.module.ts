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
    path: 'event/:id',
    component: EventComponent,
  },
  {
    path: 'new-spending',
    component: SpendingComponent,
  },
  {
    path: 'spending/:id',
    component: SpendingComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
