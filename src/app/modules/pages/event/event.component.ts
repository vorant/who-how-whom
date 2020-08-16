import { Component, OnInit } from '@angular/core';
import { SpendingModel } from '@shared/models/spending.model';
import { UserModel } from '@shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '@core/services/core.service';
import { combineLatest, Observable } from 'rxjs';
import { UpdatedSpendingModel } from './updated-spending.model';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { filter, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ResultsService } from '@core/services/results.service';
import { ResultsModel } from '@shared/models/results.model';
import { SpendingStoreService } from '../../root-store/spending-store/spending-store.service';
import { UserEntityService } from '../../root-store/users-store/user-entity.service';
import { EventModel } from '@shared/models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  eventId: string;
  updatedSpending: UpdatedSpendingModel[];
  results: ResultsModel[];
  event$: Observable<EventModel>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreService: CoreService,
    private resultsService: ResultsService,
    public dialog: MatDialog,
    private spendingStoreService: SpendingStoreService,
    private userEntityService: UserEntityService
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('eventId');

    this.event$ = this.coreService
      .getEvents()
      .pipe(map((events) => events.find((event) => event.id === this.eventId)));
    // .subscribe((events: EventModel[]) => {
    //   this.events = events;
    // });

    combineLatest([
      // this.spendingStoreService.getSpending2(),
      this.spendingStoreService.getSpending(this.eventId),
      this.userEntityService.getEntities(),
    ]).subscribe(([spending, users]: [SpendingModel[], UserModel[]]) => {
      this.updatedSpending = this.mapSpending(spending, users);
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
        this.spendingStoreService.deleteSpendingItem(spending.id);
      });
  }

  edit(spending: UpdatedSpendingModel) {
    this.router.navigate(['event', this.eventId, 'spending', spending.id]);
  }

  private updateResults() {
    this.results = this.resultsService.getResults(this.updatedSpending);
  }

  private mapSpending(
    spending: SpendingModel[],
    users: UserModel[]
  ): UpdatedSpendingModel[] {
    return spending.map(
      (el) =>
        <UpdatedSpendingModel>{
          ...el,
          who: users.find(
            (user) => user.id.toString() === el.userId.toString()
          ),
          withWho: users.filter((user) =>
            el.usersId.includes(user.id.toString())
          ),
        }
    );
  }
}
