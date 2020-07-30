import { Injectable } from '@angular/core';
import { UpdatedSpendingModel } from '../../modules/pages/event/updated-spending.model';
import { ResultsModel } from '@shared/models/results.model';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  constructor() {}

  getResults(spending: UpdatedSpendingModel[]): ResultsModel[] {
    const balance = {};

    spending.forEach((spendingItem) => {
      spendingItem.withWho.forEach((participant) => {
        const lend = `${spendingItem.who.id}-${participant.id}`; // давать в займы
        const borrow = `${participant.id}-${spendingItem.who.id}`; // брать в займы

        if (!balance[lend]) {
          balance[lend] = {
            who: spendingItem.who,
            how: 0,
            whom: participant,
          };
        }
        if (!balance[borrow]) {
          balance[borrow] = {
            who: participant,
            how: 0,
            whom: spendingItem.who,
          };
        }

        balance[lend].how += spendingItem.value / spendingItem.withWho.length;
        balance[borrow].how -= spendingItem.value / spendingItem.withWho.length;
      });
    });

    const result = [];
    for (let prop in balance) {
      if (balance[prop].how > 0) {
        result.push(balance[prop]);
      }
    }

    return result;
  }
}
