import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
})
export class UsersComponent implements OnInit {

  constructor(private _location: Location) {
  }


  ngOnInit(): void {
  }

  backButton() {
    this._location.back();
  }

}
