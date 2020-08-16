import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemComponent implements OnInit {
  @Output() addString = new EventEmitter<string>();
  @Input() label?: string;

  name = '';

  constructor() {}

  ngOnInit(): void {}

  add() {
    this.addString.emit(this.name);
    this.name = '';
  }
}
