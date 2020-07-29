import {Component, Input, OnInit} from '@angular/core';
import {SpendingModel} from "../../../../shared/models/spending.model";

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.scss']
})
export class SpendingListComponent implements OnInit {
  @Input() spending: SpendingModel[];

  constructor() {
  }

  ngOnInit(): void {
  }

  edit() {
  }

  del() {
  }

}
