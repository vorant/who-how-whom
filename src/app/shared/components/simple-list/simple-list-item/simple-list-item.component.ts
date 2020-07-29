import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SimpleListItemModel} from "../../../models/simple-list-item.model";

@Component({
  selector: 'app-simple-list-item',
  templateUrl: './simple-list-item.component.html',
  styleUrls: ['./simple-list-item.component.scss']
})
export class SimpleListItemComponent implements OnInit {
  @Input() item: SimpleListItemModel;
  @Input() url?: { path: string, field: string };
  @Output() saveEvent = new EventEmitter<SimpleListItemModel>();
  @Output() delEvent = new EventEmitter<SimpleListItemModel>();

  tmpName: string = ''
  editModes = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit() {
    this.editModes = !this.editModes;
    this.tmpName = this.item.name;
  }

  del() {
    this.delEvent.emit(this.item);
  }

  save() {
    this.item.name = this.tmpName;
    this.saveEvent.emit(this.item);
    this.editModes = !this.editModes;
  }

  cancel() {
    this.editModes = !this.editModes;
  }
}
