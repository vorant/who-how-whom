import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {EventModel} from "../../../models/event.model";

@Component({
  selector: 'app-simple-list-item',
  templateUrl: './simple-list-item.component.html',
  styleUrls: ['./simple-list-item.component.scss']
})
export class SimpleListItemComponent implements OnInit {
  @Input() event: EventModel;
  @Output() saveEvent = new EventEmitter<EventModel>();
  @Output() delEvent = new EventEmitter<EventModel>();

  tmpName: string = ''
  editModes = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit() {
    this.editModes = !this.editModes;
    this.tmpName = this.event.name;
  }

  del() {
    this.delEvent.emit(this.event);
  }

  save() {
    this.event.name = this.tmpName;
    this.saveEvent.emit(this.event);
    this.editModes = !this.editModes;
  }

  cancel() {
    this.editModes = !this.editModes;
  }
}