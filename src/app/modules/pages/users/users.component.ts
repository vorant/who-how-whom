import { Component, OnInit } from '@angular/core';
import { UserModel } from '@shared/models/user.model';
import { CoreService } from '@core/services/core.service';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { UserEntityService } from '../../root-store/users-store/user-entity.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UserModel[] = [];
  users$: Observable<UserModel[]>;
  loaded$: Observable<boolean>;
  loading$: Observable<boolean>;

  constructor(
    private coreService: CoreService,
    public dialog: MatDialog,
    private userEntityService: UserEntityService
  ) {}

  ngOnInit(): void {
    this.users$ = this.userEntityService.getEntities();
    this.loaded$ = this.userEntityService.loaded$;
    this.loading$ = this.userEntityService.loading$;
  }

  addUser(name: string) {
    this.userEntityService.add({
      name,
      id: new Date().getTime().toString(),
    });
  }

  saveUser(user: UserModel) {
    this.userEntityService.upsert(user);
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
        this.userEntityService.delete(user.id);
      });
  }
}
