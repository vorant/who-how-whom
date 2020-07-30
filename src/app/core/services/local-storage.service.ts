import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '@shared/models/event.model';
import { UserModel } from '@shared/models/user.model';
import { SpendingModel } from '@shared/models/spending.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storageEventsName = 'appEvents';
  private storageUsersName = 'appUsers';
  private storageSpendingName = 'appSpending';

  constructor() {}

  getUsers(): Observable<UserModel[]> {
    return this.getData<UserModel>(this.storageUsersName);
  }

  saveUsers(users: UserModel[]): void {
    this.saveData(users, this.storageUsersName);
  }

  getEvents(): Observable<EventModel[]> {
    return this.getData<EventModel>(this.storageEventsName);
  }

  saveEvents(events: EventModel[]): void {
    this.saveData(events, this.storageEventsName);
  }

  getSpending(): Observable<SpendingModel[]> {
    return this.getData<SpendingModel>(this.storageSpendingName);
  }

  saveSpending(spending: SpendingModel[]): void {
    this.saveData(spending, this.storageSpendingName);
  }

  private saveData<T>(data: T[], storageName: string) {
    let str = '';
    try {
      str = JSON.stringify(data);
    } catch (e) {
      console.error(e);
    }
    localStorage.setItem(storageName, str);
  }

  private getData<T>(storageName: string): Observable<T[]> {
    return new Observable((subscriber) => {
      let data: T[] = [];
      try {
        data = JSON.parse(localStorage.getItem(storageName)) || [];
      } catch (e) {
        console.error(e);
      }
      subscriber.next(data);
      subscriber.complete();
    });
  }
}
