import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SimpleListItemModel } from '../../models/simple-list-item.model';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleListComponent implements OnInit {
  @Input() items: SimpleListItemModel[];
  @Input() url?: { path: string; field: string };
  @Output() saveEvent = new EventEmitter<any>();
  @Output() delEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
