import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleListComponent } from './simple-list.component';
import { SharedModule } from '@shared/shared.module';

describe('SimpleListComponent', () => {
  let component: SimpleListComponent;
  let fixture: ComponentFixture<SimpleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SimpleListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
      .catch((err) => {
        console.error('err:', err);
      });
  }));

  it('should create', () => {
    // component.items = [];
    expect(component).toBeTruthy();
  });
});
