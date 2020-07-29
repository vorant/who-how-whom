import {Component, OnInit} from '@angular/core';
import {EventModel} from "../../models/event.model";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: EventModel[] = [
    {
      name: 'Photos'
    },
    {
      name: 'Recipes'
    },
    {
      name: 'Work'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
