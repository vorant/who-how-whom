import { Component, OnInit } from '@angular/core';
import { SpendingModel } from '@shared/models/spending.model';
import { UserModel } from '@shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '@core/services/core.service';
import { combineLatest } from 'rxjs';
import { UpdatedSpendingModel } from './updated-spending.model';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ResultsService } from '@core/services/results.service';
import { ResultsModel } from '@shared/models/results.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  eventId: string;
  spending: SpendingModel[] = [];
  users: UserModel[] = [];
  updatedSpending: UpdatedSpendingModel[] = [];
  results: ResultsModel[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreService: CoreService,
    private resultsService: ResultsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('eventId');

    combineLatest([
      this.coreService.getSpending(),
      this.coreService.getUsers(),
    ]).subscribe(([spending, users]: [SpendingModel[], UserModel[]]) => {
      this.spending = spending;
      this.users = users;
      this.updatedSpending = this.spending.map(
        (el) =>
          <UpdatedSpendingModel>{
            ...el,
            who: this.users.find(
              (user) => user.id.toString() === el.userId.toString()
            ),
            withWho: this.users.filter((user) =>
              el.usersId.includes(user.id.toString())
            ),
          }
      );

      this.updateResults();
    });
  }

  addSpending() {
    this.router.navigate(['spending'], { relativeTo: this.route });
  }

  del(spending: UpdatedSpendingModel) {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: '300px',
        data: { name: spending.name },
      })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => {
        this.spending = this.spending.filter((el) => el.id !== spending.id);
        this.updatedSpending = this.updatedSpending.filter(
          (el) => el.id !== spending.id
        );

        this.coreService.saveSpending(this.spending);
        this.updateResults();
      });
  }

  edit(spending: UpdatedSpendingModel) {
    this.router.navigate(['event', this.eventId, 'spending', spending.id]);
  }

  updateResults() {
    this.results = this.resultsService.getResults(this.updatedSpending);
  }
}
