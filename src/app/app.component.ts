import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'whw';

  someF(a: number): number {
    a = a === 0 ? 1 : 2;

    if (a === 2) {
      a = 3;
    }
    return a;
  }
}
