import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { SpendingModel } from '@shared/models/spending.model';
import { UserModel } from '@shared/models/user.model';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'app-spending-form',
  templateUrl: './spending-form.component.html',
  styleUrls: ['./spending-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpendingFormComponent implements OnInit {
  @Input() form?: SpendingModel;
  @Output() create = new EventEmitter<SpendingModel>();
  @Output() cancel = new EventEmitter<void>();

  spending: SpendingModel;
  users: UserModel[] = [];

  name: string;
  cost: number;
  who: UserModel;
  selectedUsers: UserModel[] = [];

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.coreService.getUsers().subscribe((users: UserModel[]) => {
      this.users = users;

      if (this.form) {
        this.name = this.form.name;
        this.cost = this.form.value;

        this.who = this.users.find(
          (user) => user.id.toString() === this.form.userId.toString()
        );

        this.selectedUsers = this.users.filter((user) =>
          this.form.usersId.includes(user.id)
        );
      }
    });
  }

  add() {
    this.spending = {
      value: this.cost,
      userId: this.who.id.toString(),
      usersId: this.selectedUsers.map((user) => user.id.toString()),
      date: new Date(),
      id: (this.form && this.form.id) || new Date().getTime().toString(),
      name: this.name,
      eventId: (this.form && this.form.eventId) || null,
    };

    this.create.emit(this.spending);
  }
}
