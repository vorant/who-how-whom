import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventModel} from "../../../shared/models/event.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: EventModel[] = [
    {
      name: 'Photos',
      id: 1
    },
    {
      name: 'Recipes',
      id: 2
    },
    {
      name: 'Work',
      id: 3
    }
  ];

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  goTo(id: string) {
    this.router.navigate(['/event', { id }]);
  }
}
