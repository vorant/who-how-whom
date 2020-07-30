import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {SpendingModel} from "../../../../shared/models/spending.model";
import {UpdatedSpendingModel} from "../updated-spending.model";

@Component({
  selector: 'app-spending-list',
  templateUrl: './spending-list.component.html',
  styleUrls: ['./spending-list.component.scss']
})
export class SpendingListComponent implements OnInit {
  @Input() spending: UpdatedSpendingModel[];
  @Output() edit = new EventEmitter<UpdatedSpendingModel>();
  @Output() del = new EventEmitter<UpdatedSpendingModel>();

  constructor() {
  }

  ngOnInit(): void {
  }
}
