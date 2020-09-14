import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'whw';

  someF(a: number): number {
    if (a === 0) {
      a = 1;
    } else {
      a = 2;
    }

    if (a === 2) {
      a = 3;
    }
    return a;
  }
}
