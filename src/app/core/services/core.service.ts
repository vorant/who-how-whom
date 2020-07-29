import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {EventModel} from "../../shared/models/event.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  constructor(
    private localStorageService: LocalStorageService
  ) {}

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
}
