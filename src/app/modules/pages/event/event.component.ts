import {Component, OnInit} from '@angular/core';
import {SpendingModel} from "../../../shared/models/spending.model";
import {UserModel} from "../../../shared/models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  spending: SpendingModel[] = [
/*    {
      name: 'Vodka',
      value: 1000,
      who: {
        name: 'Alex'
      },
      withWho: [{name: 'Bob'}, {name: 'Sam'}],
      date: new Date()
    },
    {
      name: 'Munchies',
      value: 1500,
      who: {
        name: 'Bob'
      },
      withWho: [{name: 'Semen'}, {name: 'Bob'}, {name: 'Sam'}],
      date: new Date()
    }*/
  ];

  constructor(
              private router: Router) {
  }

  ngOnInit(): void {
  }

  addSpending() {
    this.router.navigate(['new-spending']);
  }

}
