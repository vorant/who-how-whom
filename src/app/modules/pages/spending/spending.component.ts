import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {SpendingModel} from "../../../shared/models/spending.model";
import {CoreService} from "../../../core/services/core.service";
import {UserModel} from "../../../shared/models/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent implements OnInit {

  constructor(
    private location: Location,
    private coreService: CoreService,
    private route: ActivatedRoute
  ) {
  }

  spending: SpendingModel[] = [];
  spendingForm: SpendingModel;

  ngOnInit(): void {
    this.coreService.getSpending().subscribe((spending: SpendingModel[]) => {
      this.spending = spending;
      const spendingId = this.route.snapshot.paramMap.get('spendingId');

      if (spendingId) {
        this.spendingForm = this.spending.find(spending => spending.id.toString() === spendingId.toString());
      }
    });
  }

  cancel() {
    this.location.back();
  }

  create(spending: SpendingModel) {
    if (spending.eventId) {
      this.spending = this.spending.map(el => {
        return el.id === spending.id ? spending : el;
      })
    } else {
      spending.eventId = this.route.snapshot.paramMap.get('eventId');
      this.spending.push(spending);
    }

    this.coreService.saveSpending(this.spending);
    this.location.back();
  }
}
