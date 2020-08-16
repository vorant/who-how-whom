import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SpendingModel } from '@shared/models/spending.model';
import { CoreService } from '@core/services/core.service';
import { ActivatedRoute } from '@angular/router';
import { SpendingStoreService } from '../../root-store/spending-store/spending-store.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss'],
})
export class SpendingComponent implements OnInit {
  constructor(
    private location: Location,
    private coreService: CoreService,
    private route: ActivatedRoute,
    private spendingStoreService: SpendingStoreService
  ) {}

  type: 'edit' | 'create';
  spending: SpendingModel[] = [];
  spendingForm: SpendingModel;

  ngOnInit(): void {
    const spendingId = this.route.snapshot.paramMap.get('spendingId');

    this.type = spendingId ? 'edit' : 'create';

    if (spendingId) {
      this.spendingStoreService
        .getSendingItem(spendingId)
        .subscribe((spending) => {
          if (spending) {
            this.spendingForm = spending;
          }
        });
    }

    // this.coreService.getSpending().subscribe((spending: SpendingModel[]) => {
    //   this.spending = spending;
    //
    //   if (spendingId) {
    //     this.spendingForm = this.spending.find(
    //       (spending) => spending.id.toString() === spendingId.toString()
    //     );
    //   }
    // });
  }

  cancel() {
    this.location.back();
  }

  create(spending: SpendingModel) {
    if (this.type === 'edit') {
      this.spendingStoreService.editSpendingItem(spending);
    } else {
      this.spendingStoreService.addSpendingItem(spending);
    }
    /*    if (spending.eventId) {
      this.spending = this.spending.map((el) => {
        return el.id === spending.id ? spending : el;
      });
    } else {
      spending.eventId = this.route.snapshot.paramMap.get('eventId');
      this.spending.push(spending);
    }*/

    // this.coreService.saveSpending(this.spending);
    this.location.back();
  }
}
