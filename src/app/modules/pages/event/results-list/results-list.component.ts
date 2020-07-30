import { Component, Input, OnInit } from '@angular/core';
import { ResultsModel } from '@shared/models/results.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent implements OnInit {
  @Input() results: ResultsModel[];

  constructor() {}

  ngOnInit(): void {}
}
