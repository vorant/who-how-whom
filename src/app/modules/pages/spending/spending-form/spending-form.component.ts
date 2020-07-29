import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {SpendingModel} from "../../../../shared/models/spending.model";
import {UserModel} from "../../../../shared/models/user.model";

@Component({
  selector: 'app-spending-form',
  templateUrl: './spending-form.component.html',
  styleUrls: ['./spending-form.component.scss']
})
export class SpendingFormComponent implements OnInit {
  @Output() create = new EventEmitter<SpendingModel>();
  @Output() cancel = new EventEmitter<void>();
  users: UserModel[] = [{
    name: 'Carl',
    id: 1
  },
    {
      name: 'Sergio',
      id: 2
    },
    {
      name: 'Amirhani',
      id: 3
    }];

  spending: SpendingModel;

  who: UserModel;
  name: string;
  cost: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.create.emit(this.spending);
  }
}
