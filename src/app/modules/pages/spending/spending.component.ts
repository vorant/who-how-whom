import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {SpendingModel} from "../../../shared/models/spending.model";

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  cancel() {
    this.location.back();
  }

  create(spending: SpendingModel) {

  }
}
