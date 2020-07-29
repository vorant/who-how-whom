import {Component, OnInit} from '@angular/core';
import {EventModel} from "../../models/event.model";

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {
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
