import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleListItemComponent } from './event-item.component';

describe('EventItemComponent', () => {
  let component: SimpleListItemComponent;
  let fixture: ComponentFixture<SimpleListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
