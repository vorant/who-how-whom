import {Component, OnInit} from '@angular/core';
import {SpendingModel} from "../../../shared/models/spending.model";
import {UserModel} from "../../../shared/models/user.model";
import {Router} from "@angular/router";
import {CoreService} from "../../../core/services/core.service";
import {combineLatest} from "rxjs";
import {UpdatedSpendingModel} from "./updated-spending.model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  spending: SpendingModel[] = [];
  users: UserModel[] = [];
  updatedSpending: UpdatedSpendingModel[] = [];

  constructor(
    private router: Router,
    private coreService: CoreService,) {
  }

  ngOnInit(): void {
    combineLatest([
      this.coreService.getSpending(),
      this.coreService.getUsers()
    ]).subscribe(([spending, users]: [SpendingModel[], UserModel[]]) => {
      this.spending = spending;
      this.users = users;
      this.updatedSpending = this.spending.map((el) => <UpdatedSpendingModel>{
          ...el,
          who: this.users.find(user => user.id === el.userId),
          withWho: this.users.filter(user => el.usersId.includes(user.id))
      });
    });
  }

  addSpending() {
    this.router.navigate(['new-spending']);
  }

  del(spending: UpdatedSpendingModel) {
    this.spending = this.spending.filter(el => el.id !== spending.id);
    this.coreService.saveSpending(this.spending);
  }

  edit(spending: UpdatedSpendingModel) {
    this.router.navigate(['spending/' + spending.id]);
  }

}
