import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {SimpleListComponent} from './components/simple-list/simple-list.component';
import {MatListModule} from '@angular/material/list';
import {AddItemComponent} from './components/add-item/add-item.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {SimpleListItemComponent} from './components/simple-list/simple-list-item/simple-list-item.component';
import {RouterModule} from "@angular/router";
import {SpreaderComponent} from '../modules/components/spreader/spreader.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatSelectModule} from "@angular/material/select";

const MaterialModules = [
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatInputModule,
  MatChipsModule,
  MatSelectModule

]

@NgModule({
  declarations: [
    HeaderComponent,
    SimpleListComponent,
    AddItemComponent,
    SimpleListItemComponent,
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
    SimpleListComponent,
    AddItemComponent,
    AddItemComponent,
    SpreaderComponent,

    ...MaterialModules
  ]
})
export class SharedModule {
}
