import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleListComponent } from './simple-list.component';

describe('EventsListComponent', () => {
  let component: SimpleListComponent;
  let fixture: ComponentFixture<SimpleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleListComponent);
    component = fixture.componentInstance;
    component.items = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
