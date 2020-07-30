import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { SpendingComponent } from './spending/spending.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '@shared/shared.module';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { ModulesComponentsModule } from '../components/modules-components.module';
import { SpendingListComponent } from './event/spending-list/spending-list.component';
import { SpendingFormComponent } from './spending/spending-form/spending-form.component';
import { ResultsListComponent } from './event/results-list/results-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
    SpendingComponent,
    UsersComponent,
    SpendingListComponent,
    SpendingFormComponent,
    ResultsListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PagesRoutingModule,
    RouterModule,
    ModulesComponentsModule,
  ],
})
export class PagesModule {}
