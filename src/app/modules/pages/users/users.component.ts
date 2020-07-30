import { Component, OnInit } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { UserModel } from '@shared/models/user.model';
import { CoreService } from '@core/services/core.service';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private coreService: CoreService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.coreService.getUsers().subscribe((users: UserModel[]) => {
      this.users = users;
    });
  }

  addUser(name: string) {
    this.users.push({
      name,
      id: new Date().getTime().toString(),
    });
    this.coreService.saveUsers(this.users);
  }

  saveUser(user: UserModel) {
    this.users = this.users.map((intUser) => {
      return intUser.id === user.id ? user : intUser;
    });

    this.coreService.saveUsers(this.users);
  }

  delUser(user: UserModel) {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: '300px',
        data: { name: user.name },
      })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => {
        this.users = this.users.filter((intUser) => intUser.id !== user.id);
        this.coreService.removeUser(user.id);
        this.coreService.saveUsers(this.users);
      });
  }
}
