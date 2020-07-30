import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../../shared/models/event.model';
import { LocalStorageService } from './local-storage.service';
import { SpendingModel } from '../../shared/models/spending.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private localStorageService: LocalStorageService) {}

  getSpending(): Observable<SpendingModel[]> {
    return this.localStorageService.getSpending();
  }

  saveSpending(events: SpendingModel[]): void {
    this.localStorageService.saveSpending(events);
  }

  getEvents(): Observable<EventModel[]> {
    return this.localStorageService.getEvents();
  }

  saveEvents(events: EventModel[]): void {
    this.localStorageService.saveEvents(events);
  }

  getUsers(): Observable<EventModel[]> {
    return this.localStorageService.getUsers();
  }

  saveUsers(events: EventModel[]): void {
    this.localStorageService.saveUsers(events);
  }

  removeSpending(eventId: string) {
    this.localStorageService
      .getSpending()
      .pipe(map((spending) => spending.filter((el) => el.eventId !== eventId)))
      .subscribe(this.saveSpending.bind(this));
  }

  removeUser(userId: string) {
    this.localStorageService
      .getSpending()
      .pipe(
        map((spending) => {
          return spending
            .filter((el) => el.userId !== userId.toString())
            .map((el) => {
              el.usersId.filter((usr) => usr.toString() !== userId.toString());
              return el;
            });
        })
      )
      .subscribe(this.saveSpending.bind(this));
  }
}
