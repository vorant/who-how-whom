import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common'
import {EventModel} from "../../../shared/models/event.model";
import {UserModel} from "../../../shared/models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [
    {
      name: 'Carl'
    },
    {
      name: 'Sergio'
    },
    {
      name: 'Amirhani'
    }
  ];

  constructor() {
  }


  ngOnInit(): void {
  }
}
