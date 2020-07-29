import {Component, OnInit} from '@angular/core';
import {EventModel} from "../../../shared/models/event.model";
import {CoreService} from "../../../core/services/core.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: EventModel[] = [];

  constructor(
    private coreService: CoreService
  ) {
  }

  ngOnInit(): void {
    this.coreService.getEvents().subscribe((events: EventModel[]) => {
      this.events = events;
    })
  }

  addString(str: string) {
    this.events.push({
      name: str,
      id: new Date().getTime()
    });
    this.coreService.saveEvents(this.events);
  }

  saveEvent(event: EventModel) {
    this.events = this.events.map(intEvent => {
      return intEvent.id === event.id ? event : intEvent;
    });

    this.coreService.saveEvents(this.events);
  }

  delEvent(event: EventModel) {
    this.events = this.events.filter(intEvent => intEvent.id !== event.id);
    this.coreService.saveEvents(this.events);
  }
}
