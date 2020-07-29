import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EventModel} from "../../models/event.model";
import {SimpleListItemModel} from "../../models/simple-list-item.model";

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {
  @Input() items: SimpleListItemModel[];
  @Input() url?: { path: string, field: string };
  @Output() saveEvent = new EventEmitter<SimpleListItemModel>();
  @Output() delEvent = new EventEmitter<SimpleListItemModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
