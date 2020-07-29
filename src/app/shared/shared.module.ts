import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {EventsListComponent} from './components/events-list/events-list.component';
import {MatListModule} from '@angular/material/list';
import {AddItemComponent} from './components/add-item/add-item.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { EventItemComponent } from './components/events-list/event-item/event-item.component';
import {RouterModule} from "@angular/router";
import { SpreaderComponent } from './components/spreader/spreader.component';

const MaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatInputModule
]

@NgModule({
  declarations: [
    HeaderComponent,
    EventsListComponent,
    AddItemComponent,
    EventItemComponent,
    SpreaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    ...MaterialModules
  ],
  exports: [
    HeaderComponent,
    EventsListComponent,
    AddItemComponent,
    AddItemComponent,
    SpreaderComponent,

    ...MaterialModules
  ]
})
export class SharedModule {
}
