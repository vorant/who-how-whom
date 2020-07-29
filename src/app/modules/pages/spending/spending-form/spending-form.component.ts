import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SpendingModel} from "../../../../shared/models/spending.model";

@Component({
  selector: 'app-spending-form',
  templateUrl: './spending-form.component.html',
  styleUrls: ['./spending-form.component.scss']
})
export class SpendingFormComponent implements OnInit {
  @Output() create = new EventEmitter<SpendingModel>();
  @Output() cancel = new EventEmitter<void>();
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  spending: SpendingModel;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.create.emit(this.spending);
  }
}
