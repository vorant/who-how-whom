import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { SimpleListItemModel } from '@shared/models/simple-list-item.model';

@Component({
  selector: 'app-simple-list-item',
  templateUrl: './simple-list-item.component.html',
  styleUrls: ['./simple-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleListItemComponent implements OnInit {
  @Input() item: SimpleListItemModel;
  @Input() url?: { path: string; field: string };
  @Output() saveEvent = new EventEmitter<SimpleListItemModel>();
  @Output() delEvent = new EventEmitter<SimpleListItemModel>();
  @ViewChild('inputEl') inputElement: ElementRef;

  tmpName: string = '';
  editModes = false;

  constructor(public cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  edit() {
    this.editModes = !this.editModes;
    this.tmpName = this.item.name;
    // make focus async
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    });
  }

  del() {
    this.delEvent.emit(this.item);
  }

  save() {
    this.saveEvent.emit({ ...this.item, name: this.tmpName });
    this.editModes = !this.editModes;
  }

  cancel() {
    this.editModes = !this.editModes;
  }
}
