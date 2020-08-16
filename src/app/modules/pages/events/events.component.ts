import { Component, OnInit } from '@angular/core';
import { EventModel } from '@shared/models/event.model';
import { CoreService } from '@core/services/core.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events: EventModel[] = [];

  constructor(private coreService: CoreService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.coreService.getEvents().subscribe((events: EventModel[]) => {
      this.events = events;
    });
  }

  addString(str: string) {
    this.events.push({
      name: str,
      id: new Date().getTime().toString(),
    });
    this.events = this.events.slice();
    this.coreService.saveEvents(this.events);
  }

  saveEvent(event: EventModel) {
    this.events = this.events.map((intEvent) => {
      return intEvent.id === event.id ? event : intEvent;
    });

    this.coreService.saveEvents(this.events);
  }

  delEvent(event: EventModel) {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: '300px',
        data: { name: event.name },
      })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => {
        this.coreService.removeSpending(event.id);
        this.events = this.events.filter(
          (intEvent) => intEvent.id !== event.id
        );
        this.coreService.saveEvents(this.events);
      });
  }

  installPWA() {
    // this.Pwa.promptEvent.prompt();
  }
}
